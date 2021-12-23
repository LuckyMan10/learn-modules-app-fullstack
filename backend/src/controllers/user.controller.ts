import { Injectable } from '@nestjs/common';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  Req,
  Query,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Body } from '@nestjs/common';
import { UserService } from 'services/user.service';
import { TokenService } from 'services/token.service';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { HttpStatus } from '@nestjs/common';
import { updateUserInfoDto } from 'dtos/userInfo.dto';
import { updateInfoI } from 'interfaces/updateInfoI.interface';
import { accountInfoDB } from 'interfaces/accountInfo.interface';
import { modulesDB } from 'interfaces/accountInfo.interface';
import { moduleDto } from 'dtos/module.dto';
import { queryDto } from 'dtos/query.dto';
import { ValidationPipe } from '@nestjs/common';
import { UsePipes } from '@nestjs/common';

@Controller('api/user')
@Injectable()
export class UserController {
  constructor(
    private userService: UserService,
    private tokenService: TokenService,
  ) {}

  @Get('accountInfo')
  async getAccountInfo(
    @Res({ passthrough: true }) response: Response,
    @Req() request: Request,
  ): Promise<accountInfoDB | HttpException> {
    try {
      const token = request.headers.authorization.split(' ')[1];
      const decoded = this.tokenService.validateAccessToken(token);
      const accountInfo = await this.userService.findAccountInfo(decoded.id);
      return accountInfo;
    } catch (e) {
      return new HttpException({ message: e }, HttpStatus.BAD_REQUEST);
    }
  }
  @Put('accountInfo')
  @UsePipes(
    new ValidationPipe({
      skipUndefinedProperties: true,
      whitelist: true,
    }),
  )
  async updateAccountInfo(
    @Req() request: Request,
    @Body() updateInfoDto: updateUserInfoDto,
  ): Promise<accountInfoDB | HttpException> {
    try {
      const token = request.headers.authorization.split(' ')[1];
      const { successfulTests, failedTests } = updateInfoDto;
      if (!successfulTests && !failedTests) {
        throw 'Недостаточно данных для обновления';
      }
      const decoded = this.tokenService.validateAccessToken(token);
      let updateData: updateInfoI = { id: decoded.id, ...updateInfoDto };
      const updateInfo = await this.userService.updateAccountInfo(updateData);
      return updateInfo;
    } catch (e) {
      return new HttpException({ message: e }, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('activeModules')
  async getActiveModules(
    @Req() request: Request,
  ): Promise<HttpException | modulesDB> {
    try {
      const token = request.headers.authorization.split(' ')[1];
      const decoded = this.tokenService.validateAccessToken(token);
      const modules = await this.userService.findAccountActiveModules(
        decoded.id,
      );
      return modules;
    } catch (e) {
      return new HttpException({ message: e }, HttpStatus.BAD_REQUEST);
    }
  }
  @Post('activeModules')
  @UsePipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  async addActiveModule(
    @Req() request: Request,
    @Body() addModuleDto: moduleDto,
  ): Promise<HttpException | modulesDB> {
    try {
      const token = request.headers.authorization.split(' ')[1];
      const decoded = this.tokenService.validateAccessToken(token);
      const newModule = await this.userService.addModule(
        addModuleDto,
        decoded.id,
      );
      return newModule;
    } catch (e) {
      return new HttpException({ message: e }, HttpStatus.BAD_REQUEST);
    }
  }
  @Put('activeModules')
  @UsePipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  async changeActiveModule(
    @Req() request: Request,
    @Body() updateModuleDto: moduleDto,
  ): Promise<HttpException | modulesDB> {
    try {
      const token = request.headers.authorization.split(' ')[1];
      const decoded = this.tokenService.validateAccessToken(token);
      const newModule = await this.userService.changeModule(
        updateModuleDto,
        decoded.id,
      );
      return newModule;
    } catch (e) {
      return new HttpException({ message: e }, HttpStatus.BAD_REQUEST);
    }
  }
  @Delete('activeModules')
  @UsePipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  async removeActiveModules(
    @Req() request: Request,
    @Query() query: queryDto,
  ): Promise<HttpException | modulesDB> {
    try {
      const { id } = query;
      const token = request.headers.authorization.split(' ')[1];
      const decoded = this.tokenService.validateAccessToken(token);
      const removeModule = await this.userService.removeModule(decoded.id, id);
      return removeModule;
    } catch (e) {
      return new HttpException({ message: e }, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('archive')
  async getArchive(
    @Req() request: Request,
  ): Promise<HttpException | modulesDB> {
    try {
      const token = request.headers.authorization.split(' ')[1];
      const decoded = this.tokenService.validateAccessToken(token);
      const archive = this.userService.findArchive(decoded.id);
      return archive;
    } catch (e) {
      return new HttpException({ message: e }, HttpStatus.BAD_REQUEST);
    }
  }
  @Delete('archive')
  @UsePipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  async removeArchive(
    @Req() request: Request,
    @Query() query?: { id: string },
  ): Promise<HttpException | modulesDB> {
    try {
      const { id } = query;
      const token = request.headers.authorization.split(' ')[1];
      const decoded = this.tokenService.validateAccessToken(token);
      if (id) {
        const removeOneItem = await this.userService.removeOneFromArchive(
          decoded.id,
          id,
        );
        return removeOneItem;
      }
      if (!id) {
        const removeAllItems = await this.userService.removeAllFromArchive(
          decoded.id,
        );
        return removeAllItems;
      }
    } catch (e) {
      return new HttpException({ message: e }, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('dump')
  async getDump(@Req() request: Request): Promise<HttpException | modulesDB> {
    try {
      const token = request.headers.authorization.split(' ')[1];
      const decoded = this.tokenService.validateAccessToken(token);
      const dump = await this.userService.findDump(decoded.id);
      return dump;
    } catch (e) {
      return new HttpException({ message: e }, HttpStatus.BAD_REQUEST);
    }
  }
  @Delete('dump')
  async clearDump(@Req() request: Request, @Query() query?: { id: string }) {
    try {
      const { id } = query;
      const token = request.headers.authorization.split(' ')[1];
      const decoded = this.tokenService.validateAccessToken(token);
      if(id) {
        const removeOneItem = await this.userService.removeOneFromDump(
            decoded.id,
            id
        );
        return removeOneItem
      }
      if(!id) {
        const removeAllItems = await this.userService.removeAllFromDump(
            decoded.id
        );
        return removeAllItems;
      }
    } catch (e) {
      return new HttpException({ message: e }, HttpStatus.BAD_REQUEST);
    }
  }
}

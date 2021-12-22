import { Injectable } from '@nestjs/common';
import { User as UserI } from 'interfaces/user.interface';
import { UserData } from 'interfaces/userData.interface';
import { UserLogin } from 'interfaces/userLogin.interface'
import { User, UserDocument } from 'schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { TokenService } from 'services/token.service';
import { UserService } from 'services/user.service';
import { PayloadUser } from 'interfaces/userPayload.interface';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as uuid from 'uuid';


@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private readonly tokenService: TokenService,
    private readonly userService: UserService
  ) { }

  async registration(user: UserI): Promise<UserData<PayloadUser>> {
    try {
      const { email, password, username } = user;
      const candidate = await this.userModel.findOne({ email });
      if (candidate) {
        throw "Пользователь с такой почтой уже существует.";
      }
      const hashPassword = await bcrypt.hash(password, 2);
      const id = uuid.v4();
      const userData = {
        email,
        username,
        password: hashPassword,
        id
      }
      const saveUser = await this.userModel.create(userData);
      if (!(saveUser && saveUser._id)) {
        throw "Произошла ошибка при регистрации. Повторите попытку позже.";
      }

      const tokens = this.tokenService.generateTokens(userData);
      await this.tokenService.saveToken(userData.id, tokens.refreshToken);
      await this.userService.setAccountInfo({ email, username, id: userData.id });
      await this.userService.setActiveModules(userData.id);
      await this.userService.setArchive(userData.id);
      await this.userService.setDump(userData.id);
      return { ...tokens, user: userData };
    } catch (e) {
      throw e;
    }

  }
  async login({ email, password }: UserLogin): Promise<UserData<PayloadUser>> {
    try {
      const user = await this.userModel.findOne({ email });
      if (!user) {
        throw "Пользователь с таким email не найден";
      }
      const { email: userEmail, username, password: userPassword, id } = user;
      const isPassEquals = await bcrypt.compare(password, user.password);
      if (!isPassEquals) {
        throw "Неверный пароль";
      }
      const userData = { email: userEmail, username, password: userPassword, id };
      const tokens = this.tokenService.generateTokens({ ...userData });
      await this.tokenService.saveToken(userData.id, tokens.refreshToken);
      return { ...tokens, user: userData }
    } catch (e) {
      throw e;
    }

  }
  async refresh(refreshToken: string): Promise<UserData<PayloadUser>> {
    try {
      const userData = this.tokenService.validateRefreshToken(refreshToken);
      const tokenFromDb = await this.tokenService.findToken(refreshToken);
      if (!userData || !tokenFromDb) {
        throw "Требуется авторизация";
      }
      const user = await this.userModel.findOne({ id: userData.id });
      if (user) {
        const { username, password, email, id } = user;
        const tokens = this.tokenService.generateTokens({ username, password, email, id });
        await this.tokenService.saveToken(id, tokens.refreshToken);
        return { ...tokens, user: { username, password, email, id } };
      }
      if (!user) {
        throw "Пользователь не найден";
      }
    } catch (e) {
      throw e;
    }
  }
  async remove(refreshToken: string): Promise<{ message: string }> {
    try {
      const userData = this.tokenService.validateRefreshToken(refreshToken);
      const tokenFromDb = await this.tokenService.findToken(refreshToken);
      if (!userData || !tokenFromDb) {
        throw "Требуется авторизация";
      }
      const removeUser = await this.userModel.deleteOne({ id: userData.id });
      if (removeUser.deletedCount === 1) {
        return { message: "Аккаунт успешно удален" }
      } else {
        throw "При удалении аккаунта произошла ошибка"
      }
    } catch (e) {
      throw e;
    }
  }
  async logout(refreshToken: string): Promise<{ message: string }> {
    try {
      const token = await this.tokenService.removeToken(refreshToken);
      if (token && token.deletedCount === 1) {
        return { message: "Вы вышли из аккаунта" }
      } else {
        throw "При выходе из аккаунта произошла ошибка"
      }
    } catch (e) {
      throw e;
    }
  }

}

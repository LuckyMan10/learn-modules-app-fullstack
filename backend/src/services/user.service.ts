import { Injectable } from '@nestjs/common';
import { AccountInfoDocument, AccountInfo } from 'schemas/accountInfo.schema';
import { InjectModel } from '@nestjs/mongoose';
import {
  accountInfoI,
  accountInfoDB,
  modulesDB,
} from 'interfaces/accountInfo.interface';
import * as date from 'date-and-time';
import { Model } from 'mongoose';
import { updateInfoI } from 'interfaces/updateInfoI.interface';
import {
  ActiveModules,
  ActiveModulesDocument,
} from 'schemas/activeModules.schema';
import { moduleI } from 'interfaces/module.interface';
import { Archive, ArchiveSchemaDocument } from 'schemas/archive.schema';
import { Dump, DumpSchemaDocument } from 'schemas/dump.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(AccountInfo.name) private readonly accountInfoModel: Model<AccountInfoDocument>,
    @InjectModel(ActiveModules.name) private readonly activeModules: Model<ActiveModulesDocument>,
    @InjectModel(Archive.name) private readonly archiveModel: Model<ArchiveSchemaDocument>,
    @InjectModel(Dump.name) private readonly dumpModel: Model<DumpSchemaDocument>,
  ) {}

  async findAccountInfo(id: string): Promise<accountInfoDB> {
    try {
      const userInfo = await this.accountInfoModel.findOne({ userId: id });
      return userInfo;
    } catch (e) {
      throw e;
    }
  }
  async findAccountActiveModules(id: string): Promise<modulesDB> {
    try {
      const activeAccountModules = await this.activeModules.findOne({
        userId: id,
      });
      return activeAccountModules;
    } catch (e) {
      throw e;
    }
  }
  async findArchive(id: string): Promise<modulesDB> {
    try {
      const archive = await this.archiveModel.findOne({ userId: id });
      return archive;
    } catch (e) {
      throw e;
    }
  }
  async findDump(id: string): Promise<modulesDB> {
    try {
      const dump = await this.dumpModel.findOne({ userId: id });
      return dump;
    } catch (e) {
      throw e;
    }
  }

  async updateAccountInfo(updateData: updateInfoI): Promise<accountInfoDB> {
    try {
      const { id } = updateData;
      const copyData = { ...updateData };
      delete copyData.id;
      Object.keys(copyData).forEach((el) => {
        if (copyData[el] < 0) {
          delete copyData[el];
        }
      });
      const updatedData = await this.accountInfoModel.findOneAndUpdate(
        { userId: id },
        copyData,
        { new: true },
      );
      return updatedData;
    } catch (e) {
      throw e;
    }
  }
  async addModule(module: moduleI, id: string): Promise<modulesDB> {
    try {
      const { id: moduleId } = module;
      const userModule = await this.activeModules.find({
        userId: id,
        'modules.id': moduleId,
      });
      if (userModule[0]) {
        throw 'Модуль уже существует';
      }
      const newModule = await this.activeModules.findOneAndUpdate(
        { userId: id },
        {
          $push: {
            modules: module,
          },
        },
        { new: true },
      );
      return newModule;
    } catch (e) {
      throw e;
    }
  }
  async changeModule(module: moduleI, id: string): Promise<modulesDB> {
    try {
      const { id: moduleId } = module;
      await this.activeModules.findOneAndUpdate(
        { userId: id },
        {
          $pull: {
            modules: { id: moduleId },
          },
        },
        { new: true },
      );
      const updateModule = await this.activeModules.findOneAndUpdate(
        { userId: id },
        {
          $push: {
            modules: module,
          },
        },
        { new: true },
      );
      return updateModule;
    } catch (e) {
      throw e;
    }
  }
  async removeModule(userId: string, id: string): Promise<modulesDB> {
    try {
      const removedModule = await this.activeModules.find({
        userId,
        'modules.id': id,
      });
      if (!removedModule[0]) {
        throw 'Ошибка. Удаляемый модуль не найден';
      }
      const [module] = removedModule[0].modules.filter((el) => el.id === id);
      await this.archiveModel.findOneAndUpdate(
        { userId },
        {
          $push: {
            modules: module,
          },
        },
      );
      const remove = await this.activeModules.findOneAndUpdate(
        { userId },
        {
          $pull: {
            modules: { id },
          },
        },
        { new: true },
      );
      return remove;
    } catch (e) {
      throw e;
    }
  }
  async removeOneFromArchive(userId: string, id: string): Promise<modulesDB> {
    const removedModule = await this.archiveModel.find({
      userId,
      'modules.id': id,
    });
    if (!removedModule[0]) {
      throw 'Ошибка. Удаляемый модуль не найден';
    }
    const [module] = removedModule[0].modules.filter((el) => el.id === id);
    await this.dumpModel.findOneAndUpdate(
      { userId },
      {
        $push: {
          modules: module,
        },
      },
    );
    const removeOne = await this.archiveModel.findOneAndUpdate(
      { userId },
      {
        $pull: {
          modules: { id },
        },
      },
      { new: true },
    );
    return removeOne;
  }
  async removeAllFromArchive(userId: string): Promise<modulesDB> {
    const removedModules = await this.archiveModel.find({ userId });
    const { modules } = removedModules[0];
    await this.dumpModel.findOneAndUpdate(
      { userId },
      {
        $set: {
          modules: modules,
        },
      },
    );
    const removeAll = await this.archiveModel.findOneAndUpdate(
      { userId },
      {
        $set: {
          modules: [],
        },
      },
      { new: true },
    );
    return removeAll;
  }
  async removeOneFromDump(userId: string, id: string) {
    const removedModule = await this.dumpModel.findOneAndUpdate(
        {userId},
        {
            $pull: {
                modules: {id}
            }
        },
        {new: true}
    );
    return removedModule;
  }
  async removeAllFromDump(userId: string) {
    const removeAll = await this.dumpModel.findOneAndUpdate(
        {userId},
        {
            $set: {
                modules: [],
            },
        },
        {new: true}
    )
    return removeAll;
  }
  async setAccountInfo({
    email,
    username,
    id,
  }: {
    email: string;
    username: string;
    id: string;
  }): Promise<accountInfoDB> {
    try {
      const now = new Date();
      const currDate = date.format(now, 'YYYY/MM/DD HH:mm:ss');
      const accInfoData: accountInfoI = {
        regData: currDate,
        successfulTests: 0,
        failedTests: 0,
        userId: id,
        email,
        username,
      };
      const newInfo = await this.accountInfoModel.create(accInfoData);
      return newInfo;
    } catch (e) {
      throw e;
    }
  }
  async setActiveModules(id: string): Promise<modulesDB> {
    try {
      const activeModules = await this.activeModules.create({
        userId: id,
        modules: [],
      });
      return activeModules;
    } catch (e) {
      throw e;
    }
  }
  async setArchive(id: string): Promise<modulesDB> {
    try {
      const archive = await this.archiveModel.create({
        userId: id,
        modules: [],
      });
      return archive;
    } catch (e) {
      throw e;
    }
  }
  async setDump(id: string): Promise<modulesDB> {
    try {
      const dump = await this.dumpModel.create({ userId: id, modules: [] });
      return dump;
    } catch (e) {
      throw e;
    }
  }
}

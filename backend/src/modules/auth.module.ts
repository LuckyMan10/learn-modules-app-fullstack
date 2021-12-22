import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from "controllers/auth.controller";
import { AuthService } from 'services/auth.service';
import { UserSchema } from 'schemas/user.schema';
import { TokenSchema } from 'schemas/token.schema';
import { TokenService } from 'services/token.service';
import { UserService } from 'services/user.service';
import { AccountInfoSchema } from 'schemas/accountInfo.schema';
import { ActiveModulesSchema } from 'schemas/activeModules.schema';
import { CardSchema } from 'schemas/card.schema';
import { ModuleSchema } from 'schemas/module.schema';
import { ArchiveSchema } from 'schemas/archive.schema';
import { DumpSchema } from 'schemas/dump.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'User', schema: UserSchema },
            { name: 'AccountInfo', schema: AccountInfoSchema },
            { name: 'Token', schema: TokenSchema },
            { name: 'ActiveModules', schema: ActiveModulesSchema },
            { name: 'Card', schema: CardSchema },
            { name: 'Module', schema: ModuleSchema },
            { name: 'Archive', schema: ArchiveSchema },
            { name: 'Dump', schema: DumpSchema }
        ]),
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        TokenService,
        UserService
    ]
})
export class AuthModule { }
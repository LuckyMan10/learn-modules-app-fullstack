import { Module, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'schemas/user.schema';
import { UserController } from 'controllers/user.controller';
import { UserService } from 'services/user.service';
import { TokenService } from 'services/token.service';
import { AccountInfoSchema } from 'schemas/accountInfo.schema';
import { TokenSchema } from 'schemas/token.schema';
import { ActiveModulesSchema } from 'schemas/activeModules.schema';
import { CardSchema } from 'schemas/card.schema';
import { ModuleSchema } from 'schemas/module.schema';
import { CheckAuthMiddleware } from 'middlewares/checkAuth.middleware';
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
        ])
    ],
    controllers: [UserController],
    providers: [
        UserService,
        TokenService
    ]
})
export class UserModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(CheckAuthMiddleware)
            .forRoutes('api/user')
    }
}

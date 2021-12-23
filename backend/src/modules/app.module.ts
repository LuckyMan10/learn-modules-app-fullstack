import { Module, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth.module';
import { ConfigModule } from '@nestjs/config';
import { CheckConnectMiddleware } from 'middlewares/checkConnect.middleware';
import {UserModule} from './user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb+srv://LuckyMan10:tatita09@cluster0.v35h0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    AuthModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CheckConnectMiddleware)
      .forRoutes('api/auth', 'api/user');
  }
}

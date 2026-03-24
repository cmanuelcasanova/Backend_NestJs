import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { TaskModule } from './task/task.module';




@Module({
  imports: [ ConfigModule.forRoot( {isGlobal: true}), MongooseModule.forRoot(process.env.DATABASE_MONGO_URL || ""), AuthModule, UsersModule, TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

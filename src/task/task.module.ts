import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema  } from './entities/task.entity'
import { TaskMiddleware } from './task/task.middleware';



@Module({
   imports: [
      MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
    ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule implements NestModule {
  configure (consumer: MiddlewareConsumer ) {
    consumer.apply( TaskMiddleware  ).forRoutes({path:"/task", method: RequestMethod.POST })
  }


}

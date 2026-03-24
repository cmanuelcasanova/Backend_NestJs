import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './entities/task.entity'
import { Model } from 'mongoose';

@Injectable()
export class TaskService {

  
  constructor(@InjectModel(Task.name) private TaskModel: Model<CreateTaskDto>) {}
  
  async create(createTaskDto: CreateTaskDto):Promise<Task> {
    const createdTask = new this.TaskModel(createTaskDto)
    return createdTask.save();
  }

  async findAll(): Promise<Task[]> {
    return this.TaskModel.find().exec();;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}

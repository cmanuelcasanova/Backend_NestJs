import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity'
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {


  constructor(@InjectModel(User.name) private UserModel: Model<CreateUserDto>) {}

  async create(createUserDto: CreateUserDto):Promise<User | {}> {
    
    try {
    const created_user = new this.UserModel(createUserDto);
    
    return created_user.save();
    }catch (error){
      return {mensaje: error.errmsg}

    }

  }

  findAll(): Promise<User[]> {
    return this.UserModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
     constructor(
      @InjectModel(User.name) 
      private userModel: Model<User>
      ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = new CreateUserDto();

    newUser.name = createUserDto.name;
    newUser.email = createUserDto.email;
    newUser.password = createUserDto.password;

    return await this.userModel.create(newUser);
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    if(!id || typeof id !== 'string') return

    return await this.userModel.findById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const newUser = new CreateUserDto();

    newUser.name = updateUserDto.name;
    newUser.email = updateUserDto.email;
    newUser.password = updateUserDto.password;

    return await this.userModel.findByIdAndUpdate(id, newUser, {
      new: true,
      runValidators: true,
    })
  }

  async remove(id: string) {
    return await this.userModel.findByIdAndDelete(id);
  }
}

// Controller for User
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { plainToClass, plainToInstance } from 'class-transformer';
import { UserUseCase } from 'src/user/application/port/in/UserUseCase';
import User from 'src/user/domain/User';
import UserDTO from './dto/User.dto';
import CreateUserCommand from 'src/user/application/port/in/CreateUser.command';
import { UserEntity } from '../persistence/User.entity';

@Controller('user')
export class UserController {
  constructor(
    @Inject('userUseCase') private readonly userUseCase: UserUseCase,
  ) {
    // for user controller init
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getUser(): Promise<UserEntity[]> {
    return this.userUseCase.getAllUsers();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(`:id`)
  findUserById(@Param('id') id: string): Promise<User> {
    return this.userUseCase.getUser(id);
  }

  @Post()
  createUser(@Body() user: UserDTO): Promise<string> {
    return this.userUseCase.createUser(
      new CreateUserCommand(user.name, user.password, user.email),
    );
  }

  @Delete(`:id`)
  deleteUser(@Param('id') id: string): string {
    return this.userUseCase.deleteUser(id);
  }
}

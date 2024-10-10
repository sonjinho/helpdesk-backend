import User from 'src/user/domain/User';
import CreateUserCommand from './CreateUser.command';
import { UserEntity } from 'src/user/adapter/persistence/User.entity';

export interface UserUseCase {
  getAllUsers(): Promise<UserEntity[]>;
  getUser(id: string): Promise<User>;
  getUserByName(username: string): Promise<User>;
  createUser(command: CreateUserCommand): Promise<string>;
  updateUser(id: string, name: string, password: string, email: string): string;
  deleteUser(id: string): string;
}

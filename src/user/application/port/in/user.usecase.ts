import User from 'src/user/domain/user';
import CreateUserCommand from './create-user.command';
import { UserEntity } from 'src/user/adapter/persistence/user.entity';

export interface UserUseCase {
  getAllUsers(): Promise<UserEntity[]>;
  getUser(id: string): Promise<User>;
  getUserByName(username: string): Promise<User>;
  createUser(command: CreateUserCommand): Promise<string>;
  updateUser(id: string, name: string, password: string, email: string): string;
  deleteUser(id: string): string;
}

import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/adapter/persistence/user.entity';
import { hash } from 'src/util/cipher.util';
import { DataSource, Repository } from 'typeorm';
import User from '../../domain/user';
import { UserUseCase } from '../port/in/user.usecase';
import CreateUserCommand from '../port/in/create-user.command';

@Injectable()
export class UserService implements UserUseCase {
  private readonly logger = new Logger(UserService.name);
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private dataSource: DataSource,
  ) {}
  async getAllUsers(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async getUser(id: string): Promise<User> {
    const userEntity = await this.userRepository.findOneBy({ id });
    if (!userEntity) {
      return User.withId(id, 'defaultName', 'defaultPass', 'defaultEmail');
    }
    return new User(
      userEntity.id,
      userEntity.username,
      userEntity.password,
      userEntity.email,
    );
  }
  async getUserByName(username: string): Promise<User> {
    const userEntity = await this.userRepository.findOneBy({ username });
    if (!userEntity) {
      throw new NotFoundException('User not found');
    }
    return new User(
      userEntity.id,
      userEntity.username,
      userEntity.password,
      userEntity.email,
    );
  }
  async createUser(command: CreateUserCommand): Promise<string> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const hashedPassword = await hash(command.password);
      const user = await queryRunner.manager.save(
        new UserEntity(command.name, hashedPassword, command.email),
      );
      await queryRunner.commitTransaction();
      return user.id;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      this.logger.error('Transaction failed', error.stack);
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  updateUser(
    id: string,
    name: string,
    password: string,
    email: string,
  ): string {
    throw new Error('Method not implemented.');
  }
  deleteUser(id: string): string {
    throw new Error('Method not implemented.');
  }
}

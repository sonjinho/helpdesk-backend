import { ClassProvider, Module } from '@nestjs/common';
import { UserService } from './application/service/UserService';
import { UserController } from './adapter/web/UserController';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './adapter/persistence/User.entity';

const userUseCase: ClassProvider = {
  provide: 'userUseCase',
  useClass: UserService,
};

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [userUseCase],
  exports: [userUseCase],
})
export class UserModule {}

import { ClassProvider, Module } from '@nestjs/common';
import { UserService } from './application/service/user.service';
import { UserController } from './adapter/web/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './adapter/persistence/user.entity';

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

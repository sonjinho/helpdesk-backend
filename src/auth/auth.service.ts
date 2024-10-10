import { Inject, Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserUseCase } from 'src/user/application/port/in/UserUseCase';
import { isHashValid } from 'src/util/cipher.util';

@Injectable()
export class AuthService {
  private logger = new Logger(AuthService.name);
  constructor(
    @Inject('userUseCase') private readonly userUseCase: UserUseCase,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    this.logger.error(username, password);
    const user = await this.userUseCase.getUserByName(username);
    if (user && (await isHashValid(password, user.getPassword()))) {
      const { ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { name: user.name, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

import { IsEmail, IsNotEmpty } from 'class-validator';

class CreateUserCommand {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;

  constructor(name: string, password: string, email: string) {
    this.name = name;
    this.password = password;
    this.email = email;
  }
}

export default CreateUserCommand;

import { Exclude } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

class User {
  id: string;
  @IsString()
  @IsNotEmpty()
  name: string;
  @Exclude()
  @IsNotEmpty()
  private _password: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;

  static withoutId(name: string, password: string, email: string) {
    return new User('', name, password, email);
  }

  static withId(id: string, name: string, password: string, email: string) {
    return new User(id, name, password, email);
  }

  constructor(id: string, name: string, password: string, email: string) {
    this.id = id;
    this.name = name;
    this._password = password;
    this.email = email;
  }

  // Getter for password (보통은 비밀번호의 Getter는 제공하지 않음)
  public getPassword(): string {
    return this._password;
  }

  // Setter for password (나중에 암호화 기능 추가 가능)
  public setPassword(newPassword: string): void {
    // 추후 비밀번호 암호화 로직 추가 가능
    this._password = newPassword;
  }

  // 이메일 업데이트
  public setEmail(newEmail: string): void {
    this.email = newEmail;
  }

  // 이름 업데이트
  public setName(newName: string): void {
    this.name = newName;
  }
}

export default User;

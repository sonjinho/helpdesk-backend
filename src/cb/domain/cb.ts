import { IsEmail, IsISO31661Alpha2, IsString } from 'class-validator';

export class CertificationBody {
  private readonly id: string;
  @IsString()
  private readonly name: string;
  @IsISO31661Alpha2()
  private readonly country: string;
  @IsString()
  private readonly address: string;
  @IsString()
  private readonly phone: string;
  @IsEmail()
  private readonly email: string;
  constructor(
    id: string,
    name: string,
    address: string,
    phone: string,
    email: string,
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.email = email;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getCountry(): string {
    return this.country;
  }

  public getAddress(): string {
    return this.address;
  }

  public getPhone(): string {
    return this.phone;
  }

  public getEmail(): string {
    return this.email;
  }
}

import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  validateSync,
} from 'class-validator';

export class CustomerContact {
  private id: number;
  private customerId: string;
  @IsEmail()
  private email: string;
  @IsNotEmpty()
  @IsPhoneNumber()
  private phoneNumber: string;
  @IsString()
  @IsNotEmpty()
  private address: string;

  constructor(
    id: number,
    customerId: string,
    email: string,
    phoneNumber: string,
    address: string,
  ) {
    this.id = id;
    this.customerId = customerId;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.address = address;

    // validation check
    this.validate();
  }

  private validate() {
    const errors = validateSync(this);
    if (errors.length > 0) {
      throw errors;
    }
  }

  // Getters
  public getCustomerId(): string {
    return this.customerId;
  }

  public getEmail(): string {
    return this.email;
  }

  public getPhoneNumber(): string {
    return this.phoneNumber;
  }

  public getAddress(): string {
    return this.address;
  }
}

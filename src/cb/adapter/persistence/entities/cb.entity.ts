import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CertificationBodyEntity {
  @PrimaryGeneratedColumn('uuid')
  private id: string;
  @Index({ unique: true })
  @Column()
  private name: string;
  @Index()
  @Column()
  private country: string;
  @Column()
  private address: string;
  @Column()
  private phone: string;
  @Column()
  private email: string;

  constructor(
    id: string,
    name: string,
    country: string,
    address: string,
    phone: string,
    email: string,
  ) {
    this.id = id;
    this.name = name;
    this.country = country;
    this.address = address;
    this.phone = phone;
    this.email = email;
  }

  // Getters
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

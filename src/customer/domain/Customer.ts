import { IsNotEmpty, IsString } from 'class-validator';
import { CustomerContact } from './CustomerContact';
import { CustomerSns } from './CustomerSns';

export class Customer {
  private id: string;
  @IsString()
  @IsNotEmpty()
  private name: string;
  private company: string;
  private country: string;
  private contacts: CustomerContact[];
  private sns: CustomerSns[];

  constructor(
    id: string,
    name: string,
    company: string,
    country: string,
    contacts: CustomerContact[],
    sns: CustomerSns[],
  ) {
    this.id = id;
    this.name = name;
    this.company = company;
    this.country = country;
    this.contacts = contacts;
    this.sns = sns;
  }

  //getter

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getCompany() {
    return this.company;
  }

  getCountry() {
    return this.country;
  }

  getContacts() {
    return this.contacts;
  }

  getSns() {
    return this.sns;
  }
}

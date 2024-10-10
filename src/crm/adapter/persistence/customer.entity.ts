// customer entity

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CustomerContactEntity } from './customer.contacts.entity';
import { CustomerSnsEntity } from './customer.sns.entity';

@Entity()
export class CustomerEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column()
  company: string;

  @Column()
  country: string;

  @OneToMany((type) => CustomerContactEntity, (contact) => contact.customerId)
  contacts: CustomerContactEntity[];

  @OneToMany((type) => CustomerSnsEntity, (sns) => sns.customerId)
  sns: CustomerSnsEntity[];
}

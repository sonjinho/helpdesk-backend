import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CustomerContactEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ name: 'customer_id', nullable: false })
  customerId: string;
  @Column({
    name: 'email',
    nullable: false,
    unique: true,
  })
  email: string;
  @Column({
    name: 'phone_number',
    nullable: false,
  })
  phoneNumber: string;
  @Column({
    name: 'address',
  })
  address: string;
}

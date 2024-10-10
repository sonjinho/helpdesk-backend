import { SnsType } from 'src/crm/domain/customer.sns';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class CustomerSnsEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'customer_id', nullable: false })
  customerId: string;
  @Column({ name: 'sns_type', nullable: false })
  snsType: SnsType;
  @Column({ name: 'sns_id', nullable: false })
  snsId: string;
}

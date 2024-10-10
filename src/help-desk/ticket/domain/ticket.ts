import { IsNotEmpty, IsString } from 'class-validator';
import { TicketStatus } from './ticket-status';
import { TicketType } from './ticket-type';

export class Ticket {
  id: string;
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  by: string;
  @IsString()
  agent: string;
  createdAt: Date;
  updatedAt: Date;
  status: TicketStatus;
  type: TicketType;
}

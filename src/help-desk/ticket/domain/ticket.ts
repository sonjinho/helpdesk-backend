import { IsNotEmpty, IsString } from 'class-validator';
import { TicketStatus } from './ticket-status';
import { TicketType } from './ticket-type';
import { TicketChannel } from './ticket-channel';
import { TicketPriority } from './ticket-priority';

export class Ticket {
  id: number;
  @IsNotEmpty()
  @IsString()
  tenantId: string;
  @IsString()
  @IsNotEmpty()
  title: string;
  priority: TicketPriority;
  @IsString()
  @IsNotEmpty()
  customerId: string;
  @IsString()
  agent: string;
  createdAt: Date;
  updatedAt: Date;
  status: TicketStatus;
  type: TicketType;
  channel: TicketChannel;
}

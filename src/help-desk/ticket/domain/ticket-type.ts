import { IsNotEmpty, IsString } from 'class-validator';

export class TicketType {
  @IsString()
  @IsNotEmpty()
  code: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  isActive: boolean;
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateCbDto } from './create-cb.dto';

export class UpdateCbDto extends PartialType(CreateCbDto) {}

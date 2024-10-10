import { Injectable } from '@nestjs/common';
import { CreateCbDto } from './dto/create-cb.dto';
import { UpdateCbDto } from './dto/update-cb.dto';

@Injectable()
export class CbService {
  create(createCbDto: CreateCbDto) {
    return 'This action adds a new cb';
  }

  findAll() {
    return `This action returns all cb`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cb`;
  }

  update(id: number, updateCbDto: UpdateCbDto) {
    return `This action updates a #${id} cb`;
  }

  remove(id: number) {
    return `This action removes a #${id} cb`;
  }
}

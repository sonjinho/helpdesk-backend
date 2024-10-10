import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CbService } from './cb.service';
import { CreateCbDto } from './dto/create-cb.dto';
import { UpdateCbDto } from './dto/update-cb.dto';

@Controller('cb')
export class CbController {
  constructor(private readonly cbService: CbService) {}

  @Post()
  create(@Body() createCbDto: CreateCbDto) {
    return this.cbService.create(createCbDto);
  }

  @Get()
  findAll() {
    return this.cbService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cbService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCbDto: UpdateCbDto) {
    return this.cbService.update(+id, updateCbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cbService.remove(+id);
  }
}

import { Module } from '@nestjs/common';
import { CbService } from './cb.service';
import { CbController } from './cb.controller';

@Module({
  controllers: [CbController],
  providers: [CbService],
})
export class CbModule {}

import { Module } from '@nestjs/common';
import { CbService } from './cb.service';
import { CbController } from './adapter/web/cb.controller';

@Module({
  controllers: [CbController],
  providers: [CbService],
})
export class CbModule {}

import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { TimelineModule } from './timeline/timeline.module';

@Module({
  imports: [TaskModule, TimelineModule]
})
export class ProjectModule {}

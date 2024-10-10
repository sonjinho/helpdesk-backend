import { Module } from '@nestjs/common';
import { StepModule } from './step/step.module';
import { ActionModule } from './action/action.module';

@Module({
  imports: [StepModule, ActionModule],
})
export class WorkflowModule {}

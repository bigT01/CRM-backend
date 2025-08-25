import { Module } from '@nestjs/common';
import { DeveloperMilestoneCompletionService } from './developer-milestone-completion.service';
import { DeveloperMilestoneCompletionController } from './developer-milestone-completion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeveloperMilestoneCompletion } from './developer-milestone-completion.entity';
import { Developer } from 'src/developers/developer.entity';
import { Milestone } from 'src/milestone/milestone.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DeveloperMilestoneCompletion,
      Developer,
      Milestone,
    ]),
  ],
  providers: [DeveloperMilestoneCompletionService],
  controllers: [DeveloperMilestoneCompletionController],
})
export class DeveloperMilestoneCompletionModule {}

import { Module } from '@nestjs/common';
import { MilestoneService } from './milestone.service';
import { MilestoneController } from './milestone.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from 'src/project/project.entity';
import { Milestone } from './milestone.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Milestone, Project])],
  providers: [MilestoneService],
  controllers: [MilestoneController],
})
export class MilestoneModule {}

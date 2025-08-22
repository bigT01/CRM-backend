import { Module } from '@nestjs/common';
import { ProjectUsageService } from './project-usage.service';
import { ProjectUsageController } from './project-usage.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectUsage } from './project-usage.entity';
import { Project } from 'src/project/project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectUsage, Project])],
  providers: [ProjectUsageService],
  controllers: [ProjectUsageController],
})
export class ProjectUsageModule {}

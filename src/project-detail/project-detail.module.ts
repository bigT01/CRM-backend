import { Module } from '@nestjs/common';
import { ProjectDetailService } from './project-detail.service';
import { ProjectDetailController } from './project-detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectDetail } from './project-detail.entity';
import { Project } from 'src/project/project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectDetail, Project])],
  providers: [ProjectDetailService],
  controllers: [ProjectDetailController],
})
export class ProjectDetailModule {}

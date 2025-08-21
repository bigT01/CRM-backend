import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { Project } from './project.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from 'src/company/company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Project, Company])],
  providers: [ProjectService],
  controllers: [ProjectController],
})
export class ProjectModule {}

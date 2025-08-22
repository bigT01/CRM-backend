import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProjectUsageService } from './project-usage.service';
import { ProjectUsage } from './project-usage.entity';

@Controller('project-usage')
export class ProjectUsageController {
  constructor(private readonly service: ProjectUsageService) {}

  @Get()
  findAll(): Promise<ProjectUsage[]> {
    return this.service.findAll();
  }

  @Get('stats/:projectId')
  getStats(@Param('projectId') projectId: string) {
    return this.service.getStats(projectId);
  }

  @Post()
  create(@Body() data: Partial<ProjectUsage>): Promise<ProjectUsage> {
    return this.service.create(data);
  }
}

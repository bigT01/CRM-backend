import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ProjectDetailService } from './project-detail.service';
import { ProjectDetail } from './project-detail.entity';

@Controller('project-details')
export class ProjectDetailController {
  constructor(private readonly service: ProjectDetailService) {}

  @Get()
  findAll(): Promise<ProjectDetail[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<ProjectDetail> {
    return this.service.findOne(id);
  }

  @Get('/project/:id')
  findOneByProjectId(@Param('id') id: string): Promise<ProjectDetail> {
    return this.service.findOneByProjectId(id);
  }

  @Post()
  create(@Body() data: Partial<ProjectDetail>): Promise<ProjectDetail> {
    return this.service.create(data);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() data: Partial<ProjectDetail>,
  ): Promise<ProjectDetail> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.service.remove(id);
  }
}

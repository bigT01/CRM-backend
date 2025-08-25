import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { MilestoneService } from './milestone.service';
import { CreateMilestoneDto } from './dto/create-milestone.dto';
import { UpdateMilestoneDto } from './dto/update-milestone.dto';

@Controller('milestones')
export class MilestoneController {
  constructor(private readonly service: MilestoneService) {}

  @Post()
  create(@Body() dto: CreateMilestoneDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Get('/project/:projectId')
  findByProject(@Param('projectId') projectId: string) {
    return this.service.findByProjectId(projectId);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdateMilestoneDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}

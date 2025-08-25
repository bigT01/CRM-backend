import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { DeveloperMilestoneCompletionService } from './developer-milestone-completion.service';
import { CreateDevMilestoneDto } from './dto/create-dev-milestone.dto';
import { UpdateDevMilestoneDto } from './dto/update-dev-milestone.dto';

@Controller('developer-milestone-completion')
export class DeveloperMilestoneCompletionController {
  constructor(private readonly service: DeveloperMilestoneCompletionService) {}

  @Post()
  create(@Body() dto: CreateDevMilestoneDto) {
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

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdateDevMilestoneDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}

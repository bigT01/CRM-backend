import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { DevelopersService } from './developers.service';
import { Developer } from './developer.entity';

@Controller('developers')
export class DevelopersController {
  constructor(private readonly service: DevelopersService) {}

  @Get()
  findAll(): Promise<Developer[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Developer> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Developer>): Promise<Developer> {
    return this.service.create(data);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() data: Partial<Developer>,
  ): Promise<Developer> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.service.remove(id);
  }
}

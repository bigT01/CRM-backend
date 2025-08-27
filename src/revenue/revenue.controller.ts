import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { RevenueService } from './revenue.service';
import { Revenue } from './revenue.entity';

@Controller('revenue')
export class RevenueController {
  constructor(private readonly service: RevenueService) {}

  @Get()
  findAll(): Promise<Revenue[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Revenue> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Revenue>) {
    return this.service.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() data: Partial<Revenue>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}

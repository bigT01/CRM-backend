import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { AdditionalServiceService } from './additional-service.service';
import { AdditionalService } from './additional-service.entity';

@Controller('additional-service')
export class AdditionalServiceController {
  constructor(private readonly service: AdditionalServiceService) {}

  @Get()
  findAll(): Promise<AdditionalService[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<AdditionalService> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<AdditionalService>) {
    return this.service.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Partial<AdditionalService>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}

import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CompanyDocumentService } from './company-document.service';
import { CompanyDocument } from './company-document.entity';

@Controller('company-document')
export class CompanyDocumentController {
  constructor(private readonly service: CompanyDocumentService) {}

  @Get()
  findAll(): Promise<CompanyDocument[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<CompanyDocument> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<CompanyDocument>) {
    return this.service.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() data: Partial<CompanyDocument>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}

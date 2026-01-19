import { Controller, Post, Body, Param } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { AddLineItemDto } from './dto/add-line-item.dto';

@Controller('billing/invoices')
export class InvoicesController {
  constructor(private service: InvoicesService) {}

  @Post()
  create(@Body() dto: CreateInvoiceDto) {
    return this.service.create(dto);
  }

  @Post(':id/line-items')
  addLineItem(@Param('id') id: number, @Body() dto: AddLineItemDto) {
    return this.service.addLineItem(id, dto);
  }

  @Post(':id/issue')
  issue(@Param('id') id: number) {
    return this.service.issue(id);
  }

  @Post(':id/pay')
  pay(@Param('id') id: number) {
    return this.service.markPaid(id);
  }
}

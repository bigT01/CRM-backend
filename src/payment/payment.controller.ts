import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { PaymentService } from './payment.service';
import { Payment } from './payment.entity';

@Controller('payments')
export class PaymentController {
  constructor(private readonly service: PaymentService) {}

  @Get()
  findAll(): Promise<Payment[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Payment> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Payment>): Promise<Payment> {
    return this.service.create(data);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() data: Partial<Payment>,
  ): Promise<Payment> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.service.remove(id);
  }
}

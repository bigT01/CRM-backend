import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';

@Controller('billing/subscriptions')
export class SubscriptionsController {
  constructor(private service: SubscriptionsService) {}

  @Post()
  create(@Body() dto: CreateSubscriptionDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdateSubscriptionDto) {
    return this.service.update(id, dto);
  }
}

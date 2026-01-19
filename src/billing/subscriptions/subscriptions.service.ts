import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscription } from './entities/subscription.entity';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectRepository(Subscription)
    private repo: Repository<Subscription>,
  ) {}

  create(dto: CreateSubscriptionDto) {
    return this.repo.save({
      ...dto,
      nextBillingDate: dto.startDate,
    });
  }

  findAll() {
    return this.repo.find();
  }

  update(id: number, dto: UpdateSubscriptionDto) {
    return this.repo.update(id, dto);
  }
}

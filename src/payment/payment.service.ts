import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from './payment.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private readonly repo: Repository<Payment>,
  ) {}

  findAll(): Promise<Payment[]> {
    return this.repo.find({ relations: ['staff'] });
  }

  findOne(id: number): Promise<Payment> {
    return this.repo.findOne({ where: { id }, relations: ['staff'] });
  }

  create(data: Partial<Payment>): Promise<Payment> {
    const payment = this.repo.create(data);
    return this.repo.save(payment);
  }

  async update(id: number, data: Partial<Payment>): Promise<Payment> {
    await this.repo.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}

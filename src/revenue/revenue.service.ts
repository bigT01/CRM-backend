import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Revenue } from './revenue.entity';

@Injectable()
export class RevenueService {
  constructor(
    @InjectRepository(Revenue)
    private readonly repo: Repository<Revenue>,
  ) {}

  findAll(): Promise<Revenue[]> {
    return this.repo.find({ relations: ['company'] });
  }

  findOne(id: number): Promise<Revenue> {
    return this.repo.findOne({ where: { id }, relations: ['company'] });
  }

  create(data: Partial<Revenue>): Promise<Revenue> {
    const revenue = this.repo.create(data);
    return this.repo.save(revenue);
  }

  update(id: number, data: Partial<Revenue>) {
    return this.repo.update(id, data);
  }

  delete(id: number) {
    return this.repo.delete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdditionalService } from './additional-service.entity';

@Injectable()
export class AdditionalServiceService {
  constructor(
    @InjectRepository(AdditionalService)
    private readonly repo: Repository<AdditionalService>,
  ) {}

  findAll(): Promise<AdditionalService[]> {
    return this.repo.find({ relations: ['project'] });
  }

  findOne(id: string): Promise<AdditionalService> {
    return this.repo.findOne({ where: { id }, relations: ['project'] });
  }

  create(data: Partial<AdditionalService>): Promise<AdditionalService> {
    const service = this.repo.create(data);
    return this.repo.save(service);
  }

  update(id: string, data: Partial<AdditionalService>) {
    return this.repo.update(id, data);
  }

  delete(id: string) {
    return this.repo.delete(id);
  }
}

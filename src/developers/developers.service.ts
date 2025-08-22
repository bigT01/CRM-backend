import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Developer } from './developer.entity';

@Injectable()
export class DevelopersService {
  constructor(
    @InjectRepository(Developer)
    private readonly devRepo: Repository<Developer>,
  ) {}

  findAll(): Promise<Developer[]> {
    return this.devRepo.find({ relations: ['staff', 'project'] });
  }

  findOne(id: number): Promise<Developer> {
    return this.devRepo.findOne({
      where: { id },
      relations: ['staff', 'project'],
    });
  }

  create(data: Partial<Developer>): Promise<Developer> {
    const dev = this.devRepo.create(data);
    return this.devRepo.save(dev);
  }

  async update(id: number, data: Partial<Developer>): Promise<Developer> {
    await this.devRepo.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.devRepo.delete(id);
  }
}

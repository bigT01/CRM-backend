import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stuff } from './stuff.entity';

@Injectable()
export class StuffService {
  constructor(
    @InjectRepository(Stuff)
    private stuffRepository: Repository<Stuff>,
  ) {}

  findAll(): Promise<Stuff[]> {
    return this.stuffRepository.find();
  }

  findOne(id: string): Promise<Stuff> {
    return this.stuffRepository.findOne({ where: { id } });
  }

  create(stuff: Stuff): Promise<Stuff> {
    return this.stuffRepository.save(stuff);
  }

  async update(id: string, updateData: Partial<Stuff>): Promise<Stuff> {
    await this.stuffRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.stuffRepository.delete(id);
  }

  async patch(id: string, updateData: Partial<Stuff>): Promise<Stuff> {
    await this.stuffRepository.update(id, updateData);
    return this.findOne(id);
  }
}

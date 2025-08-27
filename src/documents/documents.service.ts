import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Documents } from './documents.entity';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectRepository(Documents)
    private readonly repo: Repository<Documents>,
  ) {}

  findAll(): Promise<Documents[]> {
    return this.repo.find();
  }

  findOne(id: string): Promise<Documents> {
    return this.repo.findOne({ where: { id } });
  }

  create(data: Partial<Documents>) {
    const doc = this.repo.create(data);
    return this.repo.save(doc);
  }

  update(id: string, data: Partial<Documents>) {
    return this.repo.update(id, data);
  }

  delete(id: string) {
    return this.repo.delete(id);
  }
}

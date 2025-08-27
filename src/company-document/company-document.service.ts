import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompanyDocument } from './company-document.entity';

@Injectable()
export class CompanyDocumentService {
  constructor(
    @InjectRepository(CompanyDocument)
    private readonly repo: Repository<CompanyDocument>,
  ) {}

  findAll(): Promise<CompanyDocument[]> {
    return this.repo.find({ relations: ['document', 'company', 'project'] });
  }

  findOne(id: number): Promise<CompanyDocument> {
    return this.repo.findOne({
      where: { id },
      relations: ['document', 'company', 'project'],
    });
  }

  create(data: Partial<CompanyDocument>): Promise<CompanyDocument> {
    const companyDoc = this.repo.create(data);
    return this.repo.save(companyDoc);
  }

  update(id: number, data: Partial<CompanyDocument>) {
    return this.repo.update(id, data);
  }

  delete(id: number) {
    return this.repo.delete(id);
  }
}

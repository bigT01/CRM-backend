import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
  ) {}

  async findAll(): Promise<any[]> {
    return this.companyRepository
      .createQueryBuilder('company')
      .leftJoin('company.projects', 'project')
      .loadRelationCountAndMap('company.projectsCount', 'company.projects') // считаем проекты
      .getMany();
  }

  findOne(id: string): Promise<Company> {
    return this.companyRepository.findOne({
      where: { id },
      relations: ['projects'],
    });
  }

  create(data: Company): Promise<Company> {
    return this.companyRepository.save(data);
  }

  async update(id: string, updateData: Partial<Company>): Promise<Company> {
    await this.companyRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.companyRepository.delete(id);
  }
}

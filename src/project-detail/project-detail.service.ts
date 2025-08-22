import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectDetail } from './project-detail.entity';

@Injectable()
export class ProjectDetailService {
  constructor(
    @InjectRepository(ProjectDetail)
    private readonly repo: Repository<ProjectDetail>,
  ) {}

  findAll(): Promise<ProjectDetail[]> {
    return this.repo.find({ relations: ['project'] });
  }

  findOne(id: number): Promise<ProjectDetail> {
    return this.repo.findOne({ where: { id }, relations: ['project'] });
  }

  create(data: Partial<ProjectDetail>): Promise<ProjectDetail> {
    const detail = this.repo.create(data);
    return this.repo.save(detail);
  }

  async update(
    id: number,
    data: Partial<ProjectDetail>,
  ): Promise<ProjectDetail> {
    await this.repo.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}

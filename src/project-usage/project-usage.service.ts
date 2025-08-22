import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectUsage } from './project-usage.entity';

@Injectable()
export class ProjectUsageService {
  constructor(
    @InjectRepository(ProjectUsage)
    private readonly repo: Repository<ProjectUsage>,
  ) {}

  findAll(): Promise<ProjectUsage[]> {
    return this.repo.find({ relations: ['project'] });
  }

  async getStats(projectId: string) {
    return this.repo
      .createQueryBuilder('usage')
      .select('usage.project_id', 'project_id')
      .addSelect('COUNT(*)', 'requests')
      .where('usage.project_id = :projectId', { projectId })
      .groupBy('usage.project_id')
      .getRawOne();
  }

  create(data: Partial<ProjectUsage>): Promise<ProjectUsage> {
    const usage = this.repo.create(data);
    return this.repo.save(usage);
  }
}

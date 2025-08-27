import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Project } from './project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
    private readonly dataSource: DataSource,
  ) {}

  async findAll() {
    const projects = await this.projectRepository.find({
      relations: ['company'],
    });

    const result = await Promise.all(
      projects.map(async (project) => {
        const usageExists = await this.dataSource
          .createQueryBuilder()
          .select('1')
          .from('project_usage', 'usage')
          .where('usage.project_id = :id', { id: project.id })
          .getRawOne();

        return {
          ...project,
          projectStatConnection: !!usageExists, // 👈 true / false
        };
      }),
    );

    return result;
  }

  findOne(id: string): Promise<Project> {
    return this.projectRepository.findOne({
      where: { id },
      relations: ['company'],
    });
  }

  async findOneWithDevelopers(id: string) {
    return this.projectRepository.findOne({
      where: { id },
      relations: ['developers', 'developers.staff'], // подтягиваем staff
      select: {
        id: true,
        name: true,
        developers: {
          id: true,
          compensation: true,
          staff: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    });
  }

  async create(createProjectDto: Partial<Project>): Promise<Project> {
    const project = this.projectRepository.create(createProjectDto);
    const saved = await this.projectRepository.save(project);

    // подгружаем вместе с компанией
    return this.projectRepository.findOne({
      where: { id: saved.id },
      relations: ['company'],
    });
  }

  async update(id: string, updateData: Partial<Project>): Promise<Project> {
    await this.projectRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.projectRepository.delete(id);
  }
}

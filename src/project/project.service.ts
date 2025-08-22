import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  findAll(): Promise<Project[]> {
    return this.projectRepository.find({ relations: ['company'] });
  }

  findOne(id: string): Promise<Project> {
    return this.projectRepository.findOne({
      where: { id },
      relations: ['company'],
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

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Milestone } from './milestone.entity';
import { Project } from 'src/project/project.entity';
import { CreateMilestoneDto } from './dto/create-milestone.dto';
import { UpdateMilestoneDto } from './dto/update-milestone.dto';

@Injectable()
export class MilestoneService {
  constructor(
    @InjectRepository(Milestone)
    private readonly repo: Repository<Milestone>,
    @InjectRepository(Project)
    private readonly projectRepo: Repository<Project>,
  ) {}

  async create(dto: CreateMilestoneDto): Promise<Milestone> {
    const project = await this.projectRepo.findOne({
      where: { id: dto.projectId },
    });
    if (!project) throw new NotFoundException('Project not found');

    const milestone = this.repo.create({
      name: dto.name,
      percentage_of_project: dto.percentage_of_project,
      completion_date: dto.completion_date
        ? new Date(dto.completion_date)
        : null,
      status: dto.status || 'pending',
      project,
    });

    return this.repo.save(milestone);
  }

  findAll(): Promise<Milestone[]> {
    return this.repo.find({ relations: ['project'] });
  }

  async findOne(id: number): Promise<Milestone> {
    const milestone = await this.repo.findOne({
      where: { id },
      relations: ['project'],
    });
    if (!milestone) throw new NotFoundException('Milestone not found');
    return milestone;
  }

  async findByProjectId(projectId: string) {
    const milestones = await this.repo.find({
      where: { project: { id: projectId } },
      relations: ['completions'],
    });

    return milestones.map((milestone) => ({
      id: milestone.id,
      name: milestone.name,
      percentage_of_project: milestone.percentage_of_project,
      completion_date: milestone.completion_date,
      status: milestone.status,
      contribution_percentages: milestone.completions.map(
        (c) => c.contribution_percentage,
      ), // 👈 только массив чисел
    }));
  }

  async update(id: number, dto: UpdateMilestoneDto): Promise<Milestone> {
    const milestone = await this.findOne(id);
    Object.assign(milestone, dto);
    return this.repo.save(milestone);
  }

  async remove(id: number): Promise<{ message: string }> {
    await this.repo.delete(id);
    return { message: 'Milestone deleted successfully' };
  }
}

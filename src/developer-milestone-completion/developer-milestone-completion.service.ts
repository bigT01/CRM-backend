import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeveloperMilestoneCompletion } from './developer-milestone-completion.entity';
import { Developer } from 'src/developers/developer.entity';
import { Milestone } from 'src/milestone/milestone.entity';
import { CreateDevMilestoneDto } from './dto/create-dev-milestone.dto';
import { UpdateDevMilestoneDto } from './dto/update-dev-milestone.dto';

@Injectable()
export class DeveloperMilestoneCompletionService {
  constructor(
    @InjectRepository(DeveloperMilestoneCompletion)
    private readonly repo: Repository<DeveloperMilestoneCompletion>,
    @InjectRepository(Developer)
    private readonly devRepo: Repository<Developer>,
    @InjectRepository(Milestone)
    private readonly milestoneRepo: Repository<Milestone>,
  ) {}

  async create(
    dto: CreateDevMilestoneDto,
  ): Promise<DeveloperMilestoneCompletion> {
    const developer = await this.devRepo.findOne({
      where: { id: dto.developerId },
    });
    if (!developer) throw new NotFoundException('Developer not found');

    const milestone = await this.milestoneRepo.findOne({
      where: { id: dto.milestoneId },
    });
    if (!milestone) throw new NotFoundException('Milestone not found');

    const completion = this.repo.create({
      developer,
      milestone,
      contribution_percentage: dto.contribution_percentage,
      completed_at: dto.completed_at ? new Date(dto.completed_at) : null,
    });

    return this.repo.save(completion);
  }

  findAll(): Promise<DeveloperMilestoneCompletion[]> {
    return this.repo.find({ relations: ['developer', 'milestone'] });
  }

  async findOne(id: number): Promise<DeveloperMilestoneCompletion> {
    const completion = await this.repo.findOne({
      where: { id },
      relations: ['developer', 'milestone'],
    });
    if (!completion) throw new NotFoundException('Record not found');
    return completion;
  }

  async update(
    id: number,
    dto: UpdateDevMilestoneDto,
  ): Promise<DeveloperMilestoneCompletion> {
    const completion = await this.findOne(id);
    Object.assign(completion, dto);
    return this.repo.save(completion);
  }

  async remove(id: number): Promise<{ message: string }> {
    await this.repo.delete(id);
    return { message: 'Record deleted successfully' };
  }
}

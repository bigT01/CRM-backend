import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Project } from 'src/project/project.entity';
import { DeveloperMilestoneCompletion } from 'src/developer-milestone-completion/developer-milestone-completion.entity';
import { AdditionalService } from 'src/additional-service/additional-service.entity';

@Entity('milestones')
export class Milestone {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  percentage_of_project: number;

  @Column({ type: 'timestamp', nullable: true })
  start_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  completion_date: Date;

  @Column({ nullable: true })
  additional_service_id: string;

  @Column({ default: 'pending' })
  status: string;

  @ManyToOne(() => Project, (project) => project.milestones, {
    onDelete: 'CASCADE',
  })
  project: Project;

  @ManyToOne(
    () => AdditionalService,
    (additionalService) => additionalService.id,
    {
      onDelete: 'NO ACTION',
    },
  )
  @JoinColumn({ name: 'project_id' })
  additional_service: AdditionalService;

  @OneToMany(
    () => DeveloperMilestoneCompletion,
    (completion) => completion.milestone,
  )
  completions: DeveloperMilestoneCompletion[];
}

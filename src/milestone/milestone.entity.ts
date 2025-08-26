import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Project } from 'src/project/project.entity';
import { DeveloperMilestoneCompletion } from 'src/developer-milestone-completion/developer-milestone-completion.entity';

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

  @Column({ default: 'pending' })
  status: string;

  @ManyToOne(() => Project, (project) => project.milestones, {
    onDelete: 'CASCADE',
  })
  project: Project;

  @OneToMany(
    () => DeveloperMilestoneCompletion,
    (completion) => completion.milestone,
  )
  completions: DeveloperMilestoneCompletion[];
}

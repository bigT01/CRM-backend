import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Project } from '../project/project.entity';
import { Milestone } from 'src/milestone/milestone.entity';

@Entity('additional_service')
export class AdditionalService {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  project_id: string;

  @Column()
  name: string;

  @Column({ type: 'timestamp', nullable: true })
  start_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  end_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  estimate_end_date: Date;

  @Column()
  price: number;

  @OneToMany(() => Milestone, (milestone) => milestone.project)
  milestones: Milestone[];

  @ManyToOne(() => Project, (project) => project.additionalServices)
  @JoinColumn({ name: 'project_id' })
  project: Project;
}

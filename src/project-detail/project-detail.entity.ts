import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Project } from '../project/project.entity';

@Entity()
export class ProjectDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  project_id: string;

  @Column({ type: 'timestamp', nullable: true })
  estimate_end_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  end_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  start_date: Date;

  @ManyToOne(() => Project, (project) => project.details, {
    onDelete: 'NO ACTION',
  })
  @JoinColumn({ name: 'project_id' })
  project: Project;
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Project } from '../project/project.entity';

@Entity()
export class ProjectUsage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  project_id: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;

  @ManyToOne(() => Project, (project) => project.usages, {
    onDelete: 'NO ACTION',
  })
  @JoinColumn({ name: 'project_id' })
  project: Project;
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Stuff } from '../stuff/stuff.entity';
import { Project } from '../project/project.entity';

@Entity()
export class Developer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  staff_id: string;

  @Column()
  project_id: string;

  @Column({ type: 'int', nullable: true })
  compensation: number;

  @ManyToOne(() => Stuff, (staff) => staff.developers, {
    onDelete: 'NO ACTION',
  })
  @JoinColumn({ name: 'staff_id' })
  staff: Stuff;

  @ManyToOne(() => Project, (project) => project.developers, {
    onDelete: 'NO ACTION',
  })
  @JoinColumn({ name: 'project_id' })
  project: Project;
}

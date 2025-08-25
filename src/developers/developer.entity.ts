import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Stuff } from '../stuff/stuff.entity';
import { Project } from '../project/project.entity';
import { DeveloperMilestoneCompletion } from 'src/developer-milestone-completion/developer-milestone-completion.entity';

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

  @OneToMany(
    () => DeveloperMilestoneCompletion,
    (completion) => completion.developer,
  )
  milestoneCompletions: DeveloperMilestoneCompletion[];
}

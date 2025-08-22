import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Stuff } from '../stuff/stuff.entity';
import { Project } from 'src/project/project.entity';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  staff_id: string;

  @Column()
  project_id: string;

  @Column({ type: 'int' })
  amount: number;

  @Column({ nullable: true })
  image_path: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;

  @Column({ nullable: true })
  method: string;

  @ManyToOne(() => Stuff, (staff) => staff.payments, { onDelete: 'NO ACTION' })
  @JoinColumn({ name: 'staff_id' })
  staff: Stuff;

  @ManyToOne(() => Project, (project) => project.payments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'project_id' })
  project: Project;
}

import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Company } from '../company/company.entity';
import { Developer } from 'src/developers/developer.entity';
import { ProjectUsage } from 'src/project-usage/project-usage.entity';
import { ProjectDetail } from 'src/project-detail/project-detail.entity';
import { Payment } from 'src/payment/payment.entity';
import { Milestone } from 'src/milestone/milestone.entity';
import { AdditionalService } from 'src/additional-service/additional-service.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  company_id: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @Column({ type: 'int', nullable: true })
  price: number;

  @ManyToOne(() => Company, (company) => company.projects, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'company_id' })
  company: Company;

  @OneToMany(() => Developer, (developer) => developer.project)
  developers: Developer[];

  @OneToMany(() => ProjectUsage, (usage) => usage.project)
  usages: ProjectUsage[];

  @OneToMany(() => ProjectDetail, (detail) => detail.project)
  details: ProjectDetail[];

  @OneToMany(() => Payment, (payment) => payment.project)
  payments: Payment[];

  @OneToMany(() => Milestone, (milestone) => milestone.project)
  milestones: Milestone[];

  @OneToMany(
    () => AdditionalService,
    (additionalService) => additionalService.project,
  )
  additionalServices: Milestone[];
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Documents } from '../documents/documents.entity';
import { Company } from '../company/company.entity';
import { Project } from '../project/project.entity';

@Entity('company_document')
export class CompanyDocument {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  document_id: string;

  @Column()
  company_id: string;

  @Column({ nullable: true })
  project_id: string;

  @ManyToOne(() => Documents)
  @JoinColumn({ name: 'document_id' })
  document: Documents;

  @ManyToOne(() => Company)
  @JoinColumn({ name: 'company_id' })
  company: Company;

  @ManyToOne(() => Project, { nullable: true })
  @JoinColumn({ name: 'project_id' })
  project: Project;
}

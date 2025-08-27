import { Project } from 'src/project/project.entity';
import { Revenue } from 'src/revenue/revenue.entity';
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Company {
  @PrimaryColumn()
  id: string; // varchar PK

  @Column()
  name: string;

  @Column({ nullable: true })
  image_path: string;

  @Column()
  customer: string;

  @OneToMany(() => Project, (project) => project.company)
  projects: Project[];

  @OneToMany(() => Revenue, (revenue) => revenue.company)
  revenues: Revenue[];
}

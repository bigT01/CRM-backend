import { Project } from 'src/project/project.entity';
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Company {
  @PrimaryColumn()
  id: string; // varchar PK

  @Column()
  name: string;

  @Column()
  customer: string;

  @OneToMany(() => Project, (project) => project.company)
  projects: Project[];
}

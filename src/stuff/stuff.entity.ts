import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Stuff {
  @PrimaryColumn()
  id: string; // varchar PK

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  image: string;

  @Column({ type: 'int', default: 0 })
  paid: number;

  @Column({ default: true })
  isActive: boolean;

  @Column({ type: 'int', default: 0 })
  projectsCount: number;
}

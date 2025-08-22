import { Developer } from 'src/developers/developer.entity';
import { Payment } from 'src/payment/payment.entity';
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';

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

  @OneToMany(() => Developer, (developer) => developer.staff)
  developers: Developer[];

  @OneToMany(() => Payment, (payment) => payment.staff)
  payments: Payment[];
}

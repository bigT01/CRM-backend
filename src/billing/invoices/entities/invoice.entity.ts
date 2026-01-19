import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { InvoiceStatus } from '../../enums/invoice-status.enum';
import { Subscription } from '../../subscriptions/entities/subscription.entity';
import { InvoiceLineItem } from './invoice-line-item.entity';

@Entity('invoices')
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Subscription, (s) => s.invoices, { onDelete: 'CASCADE' })
  subscription: Subscription;

  @Column({ type: 'date' })
  periodStart: Date;

  @Column({ type: 'date' })
  periodEnd: Date;

  @Column('decimal', { precision: 10, scale: 2 })
  totalAmount: number;

  @Column()
  currency: string;

  @Column({
    type: 'enum',
    enum: InvoiceStatus,
    default: InvoiceStatus.DRAFT,
  })
  status: InvoiceStatus;

  @CreateDateColumn()
  issuedAt: Date;

  @OneToMany(() => InvoiceLineItem, (item) => item.invoice, {
    cascade: true,
  })
  lineItems: InvoiceLineItem[];
}

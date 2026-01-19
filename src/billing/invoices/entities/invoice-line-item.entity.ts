import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Invoice } from './invoice.entity';

@Entity('invoice_line_items')
export class InvoiceLineItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Invoice, (invoice) => invoice.lineItems, {
    onDelete: 'CASCADE',
  })
  invoice: Invoice;

  @Column()
  description: string;

  @Column()
  type: 'base' | 'usage' | 'discount' | 'tax';

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;
}

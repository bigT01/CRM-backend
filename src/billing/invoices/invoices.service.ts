import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Invoice } from './entities/invoice.entity';
import { InvoiceLineItem } from './entities/invoice-line-item.entity';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { AddLineItemDto } from './dto/add-line-item.dto';
import { InvoiceStatus } from '../enums/invoice-status.enum';
import { Subscription } from '../subscriptions/entities/subscription.entity';

@Injectable()
export class InvoicesService {
  constructor(
    @InjectRepository(Invoice)
    private invoiceRepo: Repository<Invoice>,
    @InjectRepository(InvoiceLineItem)
    private itemRepo: Repository<InvoiceLineItem>,
    @InjectRepository(Subscription)
    private subRepo: Repository<Subscription>,
  ) {}

  async create(dto: CreateInvoiceDto) {
    const subscription = await this.subRepo.findOneBy({
      id: dto.subscriptionId,
    });

    return this.invoiceRepo.save({
      subscription,
      periodStart: dto.periodStart,
      periodEnd: dto.periodEnd,
      currency: subscription.currency,
      totalAmount: 0,
    });
  }

  async addLineItem(invoiceId: number, dto: AddLineItemDto) {
    const invoice = await this.invoiceRepo.findOne({
      where: { id: invoiceId },
      relations: ['lineItems'],
    });

    if (invoice.status !== InvoiceStatus.DRAFT) {
      throw new BadRequestException('Invoice is locked');
    }

    const item = this.itemRepo.create({
      invoice,
      ...dto,
    });

    invoice.totalAmount = Number(invoice.totalAmount) + Number(dto.amount);

    await this.invoiceRepo.save(invoice);
    return this.itemRepo.save(item);
  }

  async issue(invoiceId: number) {
    const invoice = await this.invoiceRepo.findOneBy({ id: invoiceId });
    invoice.status = InvoiceStatus.ISSUED;
    return this.invoiceRepo.save(invoice);
  }

  async markPaid(invoiceId: number) {
    const invoice = await this.invoiceRepo.findOneBy({ id: invoiceId });
    invoice.status = InvoiceStatus.PAID;
    return this.invoiceRepo.save(invoice);
  }
}

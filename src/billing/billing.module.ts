import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscription } from './subscriptions/entities/subscription.entity';
import { Invoice } from './invoices/entities/invoice.entity';
import { InvoiceLineItem } from './invoices/entities/invoice-line-item.entity';
import { SubscriptionsService } from './subscriptions/subscriptions.service';
import { InvoicesService } from './invoices/invoices.service';
import { SubscriptionsController } from './subscriptions/subscriptions.controller';
import { InvoicesController } from './invoices/invoices.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Subscription, Invoice, InvoiceLineItem])],
  controllers: [SubscriptionsController, InvoicesController],
  providers: [SubscriptionsService, InvoicesService],
})
export class BillingModule {}

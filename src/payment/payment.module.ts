import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './payment.entity';
import { Stuff } from 'src/stuff/stuff.entity';
import { Project } from 'src/project/project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Payment, Stuff, Project])],
  providers: [PaymentService],
  controllers: [PaymentController],
})
export class PaymentModule {}

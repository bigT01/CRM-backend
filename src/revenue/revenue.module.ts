import { Module } from '@nestjs/common';
import { RevenueService } from './revenue.service';
import { RevenueController } from './revenue.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Revenue } from './revenue.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Revenue])],
  providers: [RevenueService],
  controllers: [RevenueController],
})
export class RevenueModule {}

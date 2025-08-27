import { Module } from '@nestjs/common';
import { CompanyDocumentService } from './company-document.service';
import { CompanyDocumentController } from './company-document.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyDocument } from './company-document.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyDocument])],
  providers: [CompanyDocumentService],
  controllers: [CompanyDocumentController],
})
export class CompanyDocumentModule {}

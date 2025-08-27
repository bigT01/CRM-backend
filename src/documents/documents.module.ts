import { Module } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { DocumentsController } from './documents.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Documents } from './documents.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Documents])],
  providers: [DocumentsService],
  controllers: [DocumentsController],
})
export class DocumentsModule {}

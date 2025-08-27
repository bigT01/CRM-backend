import { Module } from '@nestjs/common';
import { AdditionalServiceService } from './additional-service.service';
import { AdditionalServiceController } from './additional-service.controller';
import { AdditionalService } from './additional-service.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from 'src/project/project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdditionalService, Project])],
  providers: [AdditionalServiceService],
  controllers: [AdditionalServiceController],
})
export class AdditionalServiceModule {}

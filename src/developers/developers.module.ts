import { Module } from '@nestjs/common';
import { DevelopersService } from './developers.service';
import { DevelopersController } from './developers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Developer } from './developer.entity';
import { Project } from 'src/project/project.entity';
import { Stuff } from 'src/stuff/stuff.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Developer, Stuff, Project])],
  providers: [DevelopersService],
  controllers: [DevelopersController],
})
export class DevelopersModule {}

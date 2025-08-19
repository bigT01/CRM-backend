import { Module } from '@nestjs/common';
import { StuffService } from './stuff.service';
import { StuffController } from './stuff.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stuff } from './stuff.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Stuff])],
  providers: [StuffService],
  controllers: [StuffController],
})
export class StuffModule {}

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Patch,
} from '@nestjs/common';
import { StuffService } from './stuff.service';
import { Stuff } from './stuff.entity';

@Controller('stuff')
export class StuffController {
  constructor(private readonly stuffService: StuffService) {}

  @Get()
  findAll(): Promise<Stuff[]> {
    return this.stuffService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Stuff> {
    return this.stuffService.findOne(id);
  }

  @Post()
  create(@Body() stuff: Stuff): Promise<Stuff> {
    return this.stuffService.create(stuff);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() stuff: Partial<Stuff>,
  ): Promise<Stuff> {
    return this.stuffService.update(id, stuff);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.stuffService.remove(id);
  }

  @Patch(':id')
  patch(
    @Param('id') id: string,
    @Body() updateData: Partial<Stuff>,
  ): Promise<Stuff> {
    return this.stuffService.patch(id, updateData);
  }
}

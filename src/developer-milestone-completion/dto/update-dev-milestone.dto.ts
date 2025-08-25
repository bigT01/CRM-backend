import { PartialType } from '@nestjs/mapped-types';
import { CreateDevMilestoneDto } from './create-dev-milestone.dto';

export class UpdateDevMilestoneDto extends PartialType(CreateDevMilestoneDto) {}

import {
  IsUUID,
  IsString,
  IsInt,
  IsOptional,
  IsDateString,
} from 'class-validator';

export class CreateMilestoneDto {
  @IsUUID()
  projectId: string;

  @IsString()
  name: string;

  @IsInt()
  percentage_of_project: number;

  @IsOptional()
  @IsDateString()
  completion_date?: string;

  @IsOptional()
  @IsString()
  status?: string;
}

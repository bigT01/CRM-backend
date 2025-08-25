import { IsInt, IsOptional, IsDateString } from 'class-validator';

export class CreateDevMilestoneDto {
  @IsInt()
  developerId: number;

  @IsInt()
  milestoneId: number;

  @IsInt()
  contribution_percentage: number;

  @IsOptional()
  @IsDateString()
  completed_at?: string;
}

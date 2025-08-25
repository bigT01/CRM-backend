import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Developer } from 'src/developers/developer.entity';
import { Milestone } from 'src/milestone/milestone.entity';

@Entity('developer_milestone_completion')
export class DeveloperMilestoneCompletion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  contribution_percentage: number;

  @Column({ type: 'timestamp', nullable: true })
  completed_at: Date;

  @ManyToOne(() => Developer, (developer) => developer.milestoneCompletions, {
    onDelete: 'CASCADE',
  })
  developer: Developer;

  @ManyToOne(() => Milestone, (milestone) => milestone.completions, {
    onDelete: 'CASCADE',
  })
  milestone: Milestone;
}

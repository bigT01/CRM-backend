import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('documents')
export class Documents {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  filename: string;

  @Column()
  path: string;

  @Column()
  mimetype: string;
}

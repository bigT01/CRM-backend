import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  filename: string; // имя файла

  @Column()
  path: string; // путь к файлу (например: /uploads/filename.png)

  @Column({ nullable: true })
  mimetype: string; // тип (image/png и т.д.)
}

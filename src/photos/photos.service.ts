import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>,
  ) {}

  create(photo: Partial<Photo>): Promise<Photo> {
    return this.photoRepository.save(photo);
  }

  findAll(): Promise<Photo[]> {
    return this.photoRepository.find();
  }

  findOne(id: string): Promise<Photo> {
    return this.photoRepository.findOne({ where: { id } });
  }
  async findByPath(path: string): Promise<Photo> {
    return this.photoRepository.findOne({ where: { path } });
  }
}

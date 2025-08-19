import {
  Controller,
  Post,
  Get,
  UseInterceptors,
  UploadedFile,
  Query,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { PhotosService } from './photos.service';
import { Photo } from './photo.entity';
import { join } from 'path';
import { existsSync } from 'fs';
import { Response } from 'express';

@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads', // папка для фото
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, uniqueSuffix + '-' + file.originalname);
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<Photo> {
    const photo = {
      filename: file.filename,
      path: join('uploads', file.filename),
      mimetype: file.mimetype,
    };
    return this.photosService.create(photo);
  }

  @Get()
  findAll(): Promise<Photo[]> {
    return this.photosService.findAll();
  }

  @Get('by-path')
  findByPath(@Query('path') path: string): Promise<Photo> {
    return this.photosService.findByPath(path);
  }

  @Get('file')
  async getFile(@Query('path') path: string, @Res() res: Response) {
    const filePath = join(process.cwd(), path);
    if (!existsSync(filePath)) {
      return res.status(404).send('File not found');
    }
    return res.sendFile(filePath);
  }
}

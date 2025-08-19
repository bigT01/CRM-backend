import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StuffModule } from './stuff/stuff.module';
import { PhotosModule } from './photos/photos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 36913,
      username: 'postgres',
      host: 'switchyard.proxy.rlwy.net',
      password: 'PuQTHrenBssLZgOqIsjZIJKEYsGcYMml',
      database: 'railway',
      autoLoadEntities: true,
      synchronize: true,
    }),
    StuffModule,
    PhotosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

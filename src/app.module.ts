import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StuffModule } from './stuff/stuff.module';
import { PhotosModule } from './photos/photos.module';
import { CompanyModule } from './company/company.module';
import { ProjectModule } from './project/project.module';
import { DevelopersModule } from './developers/developers.module';
import { PaymentModule } from './payment/payment.module';
import { ProjectUsageModule } from './project-usage/project-usage.module';
import { ProjectDetailModule } from './project-detail/project-detail.module';
import { MilestoneModule } from './milestone/milestone.module';
import { DeveloperMilestoneCompletionModule } from './developer-milestone-completion/developer-milestone-completion.module';
import { AdditionalServiceModule } from './additional-service/additional-service.module';
import { DocumentsModule } from './documents/documents.module';
import { CompanyDocumentModule } from './company-document/company-document.module';
import { RevenueModule } from './revenue/revenue.module';

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
    CompanyModule,
    ProjectModule,
    DevelopersModule,
    PaymentModule,
    ProjectUsageModule,
    ProjectDetailModule,
    MilestoneModule,
    DeveloperMilestoneCompletionModule,
    AdditionalServiceModule,
    DocumentsModule,
    CompanyDocumentModule,
    RevenueModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

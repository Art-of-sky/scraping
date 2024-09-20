import { Module } from '@nestjs/common';
import { ScrappingModule } from './scrapping/scrapping.module';
import { ResultsModule } from './results/results.module';
import { TypegooseModule } from 'nestjs-typegoose';
import { DatabaseConfig } from './config/database.config';
import { ScrappingService } from './scrapping/scrapping.service';
import { ScrappingController } from './scrapping/scrapping.controller';
import { ResultsService } from './results/results.service';

@Module({
  imports: [
    ScrappingModule,
    ResultsModule,
    TypegooseModule.forRoot(DatabaseConfig.mongoUri),
  ],
  providers: [ScrappingService, ResultsService],
  controllers: [ScrappingController],
})
export class AppModule {}

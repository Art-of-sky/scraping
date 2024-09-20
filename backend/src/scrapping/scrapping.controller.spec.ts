import { Controller, Post, Body, Get } from '@nestjs/common';
import { ScrappingService } from './scrapping.service';
import { ResultsService } from '../results/results.service';

@Controller('scrapping')
export class ScrappingController {
  constructor(
    private readonly scrappingService: ScrappingService,
    private readonly resultsService: ResultsService
  ) {}

  @Post()
  async scrape(@Body('url') url: string) {
    const domains = await this.scrappingService.scrapeWebsite(url);
    await this.resultsService.saveResult(url, domains);
    return { message: 'Scrapping complete', domains };
  }

  @Get()
  async getResults() {
    return this.resultsService.getAllResults();
  }
}

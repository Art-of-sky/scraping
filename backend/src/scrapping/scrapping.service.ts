import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Injectable()
export class ScrappingService {
  async scrapeWebsite(url: string): Promise<string[]> {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const domains: string[] = [];

    $('a').each((_, element) => {
      const href = $(element).attr('href');
      if (href && href.startsWith('http')) {
        domains.push(href);
      }
    });

    return domains;
  }
}

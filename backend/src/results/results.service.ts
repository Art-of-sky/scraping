import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ScrappingResult } from './results.model';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class ResultsService {
  constructor(
    @InjectModel(ScrappingResult) private readonly resultModel: ReturnModelType<typeof ScrappingResult>
  ) {}

  async saveResult(url: string, domains: string[]) {
    const newResult = new this.resultModel({ url, domains });
    return newResult.save();
  }

  async getAllResults() {
    return this.resultModel.find().exec();
  }
}

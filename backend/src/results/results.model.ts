import { prop, modelOptions } from '@typegoose/typegoose';

@modelOptions({ schemaOptions: { collection: 'scrappingResults' } })
export class ScrappingResult {
  @prop({ required: true })
  url: string;

  @prop({ required: true, type: () => [String] })
  domains: string[];

  @prop({ default: Date.now })
  executionTime: Date;
}

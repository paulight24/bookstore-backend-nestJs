import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';


export const CatSchemaSample = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});


export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;


//   @Prop([String])
//   tags: string[];

}

export const CatSchema = SchemaFactory.createForClass(Cat);

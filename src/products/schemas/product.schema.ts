import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({ versionKey: false })
export class Product {
  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop()
  img: string;

  @Prop()
  price: string;

  @Prop()
  category: string;

  @Prop()
  favor: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

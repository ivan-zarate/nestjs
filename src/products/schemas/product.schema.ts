import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { type } from 'os';

@Schema()
export class Product{
    @Prop({required:true, unique:true})
    name: String;
    @Prop({required:true})
    description: String;
    @Prop({required:true})
    code: Number;
    @Prop({required:true})
    url: String;
    @Prop({required:true})
    price: Number;
    @Prop({required:true})
    stock: Number;
    @Prop({required:true})
    incart: Boolean;
}

export type ProductDocument= HydratedDocument<Product>;

export const productSchema= SchemaFactory.createForClass(Product);
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { BookCategory } from "../book.interfaces";

@Schema({
    timestamps: true
})
export class Book {

    @Prop()
    name: string;
    
    @Prop()
    description: string;

    @Prop()
    category: BookCategory;

    @Prop()
    price: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);

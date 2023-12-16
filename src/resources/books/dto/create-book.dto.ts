import { BookCategory } from "../book.interfaces";
import { Document } from 'mongoose';

export class CreateBookDto extends Document {
    name: string;
    description: string;
    category: BookCategory;
    price: number;
}


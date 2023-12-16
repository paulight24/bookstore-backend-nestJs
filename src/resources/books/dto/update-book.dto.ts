import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { BookCategory } from '../book.interfaces';

export class UpdateBookDto extends PartialType(CreateBookDto) {
    name: string;
    description: string;
    category: BookCategory;
    price: number;
}

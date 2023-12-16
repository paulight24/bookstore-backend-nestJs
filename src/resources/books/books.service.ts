import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './entities/book.entity';
import { Model } from 'mongoose';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name) 
    private bookModel: Model<Book>
    ){}

  throwHttpExceptionFunction(errorMsg: string) {
      throw new HttpException(errorMsg, HttpStatus.BAD_REQUEST)
  }

  async create(createBookDto: CreateBookDto) {
    const newBook = await new this.bookModel(createBookDto);
    return newBook.save();
  }

  async findAll(): Promise<Book[]> {
    const books = await this.bookModel.find().exec();

    if(books) {
      return books; 
      } else this.throwHttpExceptionFunction('There are no books available');
    return books;
  }

  async findOne(id: string) {
    const bookToDelete = await this.bookModel.findById(id).exec();

    if(bookToDelete) {
    return bookToDelete; 
    } else this.throwHttpExceptionFunction('Book not Found');
    
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    const bookToUpdate = await this.bookModel.findById(id);
    const b = new this.bookModel(updateBookDto);
    
    if(bookToUpdate) {
      return await this.bookModel.findByIdAndUpdate(id, b)
    } else throw new HttpException('Book not Found', HttpStatus.BAD_REQUEST)

  }

  async remove(id: string) {
    const bookToDelete = await this.bookModel.findById(id);

    if(bookToDelete) {
      return await this.bookModel.findByIdAndDelete(id).exec();
    } else this.throwHttpExceptionFunction('Book not Found');
  }
}



import { Injectable } from '@nestjs/common';
import { Dog } from './interfaces/dog/dog.interface';

@Injectable()
export class AppService {

  dog: Dog[] = [
    {
      ID: 1,
      name: 'Bark',
      breed: 'German Sheperd',
      color: ['White', 'black']

    },
    {
      ID: 2,
      name: 'Saver',
      breed: 'Bull dog',
      color: ['Grey']

    }
  ];

  getHello(): string {
    return 'Hello World12!';
  }

  getDogs(): Dog[] {
    return this.dog;
  }
}

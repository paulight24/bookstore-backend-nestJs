import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    this.echoSomething('Amaizing backend with nest');
    return this.appService.getHello();
  }

  @Get('/cat')
  getCats(): string {
    this.echoSomething('Cats here');
    return this.appService.getHello();
  }

  echoSomething(input: string) {
    console.log(input);
  }
}

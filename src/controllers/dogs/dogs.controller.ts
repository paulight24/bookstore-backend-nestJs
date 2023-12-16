import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DogService } from './dog.service';
import { Dog } from 'src/interfaces/dog/dog.interface';

@Controller('dogs')
export class DogsController {
    constructor(private readonly dogService: DogService) {}
    
    @Get()
    getDogs(){
        return this.dogService.getDogs();
    }

    @Get('breed')
    getbreed() {
        return 'Dog breed';
    }
    
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.dogService.findOne(+id);
    }

    @Post()
    addDog(@Body() body: Partial<Dog>) {
        return this.dogService.addDog(body);
    }
}

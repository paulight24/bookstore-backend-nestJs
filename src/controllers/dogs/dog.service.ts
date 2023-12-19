import { Injectable } from "@nestjs/common";
import { Dog } from "src/app.service";

@Injectable()
export class DogService {
    

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

    findOne(id: number) {
        return this.dog.find(dog => dog.ID === id);
    }

    addDog(body: Partial<Dog> | Dog) {
        const date = new Date();
        const ID = date.getTime(); 
        const newDog = {
            ID,
            name: 'Bark',
            breed: 'German Sheperd',
            color: ['White', 'black']
      
          };
       
        const newObj = [...this.dog, newDog]
        this.dog = newObj;
        return newDog;
    }
}
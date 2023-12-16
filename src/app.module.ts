import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsController } from './controllers/dogs/dogs.controller';
import { UsersModule } from './resources/users/users.module';
// import { CatsModule } from './Modules/cats/cats.module';
import { DogService } from './controllers/dogs/dog.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsController } from './Modules/cats/cats.controller';
import { ProductsModule } from './resources/products/products.module';
import config from './config/keys';
  // imports: [UsersModule, MongooseModule.forRoot('mongodb://localhost/nest')],
@Module({
  imports: [UsersModule, ProductsModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController, CatsController,  DogsController],
  providers: [AppService, DogService],
})
export class AppModule {}

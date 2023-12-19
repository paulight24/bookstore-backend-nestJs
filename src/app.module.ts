import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsController } from './controllers/dogs/dogs.controller';
import { DogService } from './controllers/dogs/dog.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './resources/products/products.module';
import { BooksModule } from './resources/books/books.module';
import { UserModule } from './resources/user/user.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import config from './config/keys';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot(config.mongoURI), BooksModule, UserModule, AuthModule],
  controllers: [AppController, DogsController],
  providers: [AppService, DogService],
})
export class AppModule {}

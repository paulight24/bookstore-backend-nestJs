import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from 'src/resources/user/user.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    // imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}

// imports: [MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }])],
// controllers: [ProductsController],
// providers: [ProductsService],

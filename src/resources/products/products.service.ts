import { Injectable, ForbiddenException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import { Model } from 'mongoose';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  
  constructor(
    @InjectModel(Product.name) 
    private productModel: Model<Product>
    ) {}
  
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }

  async findOne(id: string) {
    const product = await this.productModel.findById(id);
    return product;
  }

  async updateById(id: string, product: UpdateProductDto): Promise<Product> {
    // get the product by id
    const updateProductDto = new UpdateProductDto();
    updateProductDto.name = product.name;
    updateProductDto.description = product.description;
    updateProductDto.qty = product.qty;

    const productExists =
      await this.productModel.findById(id);

    // check if user owns the product
    if (!productExists || productExists.id !== id)
      throw new ForbiddenException(
        'Access to resources denied',
      );

    // Update the product  
    return await this.productModel.findByIdAndUpdate(id, updateProductDto, {
      new: true,
      runValidators: true,
    });
  }

  async remove(id: string) {
    return await this.productModel.findByIdAndDelete(id);
  }
}

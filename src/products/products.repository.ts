import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from 'mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
@Injectable()
export class ProductsRepository {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  // async findOne(userFilterQuery: FilterQuery<User>): Promise<User> {
  //   return this.userModel.findOne(userFilterQuery);
  // }

  async find(productFilterQuery: FilterQuery<Product>): Promise<Product[]> {
    return this.productModel.find(productFilterQuery);
  }

  async create(product: Product): Promise<Product> {
    const newProduct = new this.productModel(product);
    return newProduct.save();
  }
}

import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsRepository } from './products.repository';
import { Product } from './schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  createProduct(createProductDto: CreateProductDto) {
    return this.productsRepository.create(createProductDto);
  }

  getProducts(): Promise<Product[]> {
    return this.productsRepository.find({});
  }
}

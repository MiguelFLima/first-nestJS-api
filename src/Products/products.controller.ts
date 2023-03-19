/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsRepository } from './products.repository';

@Controller('/products')
export class ProductsController {
  constructor(private readonly productsRepository: ProductsRepository) {}

  @Post()
  async createProduct(@Body() productData) {
    this.productsRepository.save(productData);
    return productData;
  }

  @Get()
  async getProducts() {
    return this.productsRepository.getAll();
  }
}

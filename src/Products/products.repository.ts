/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsRepository {
  private products = [];

  save(product) {
    this.products.push(product);
  }

  getAll() {
    return this.products;
  }
}

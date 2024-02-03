/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get } from "@nestjs/common";
import { ProductRepository } from './product.repository';

@Controller('/products')
export class ProductController {

    constructor(private productRepository: ProductRepository) { }

    @Post()
    async createProduct(@Body() productData) {
        this.productRepository.create(productData);

        return productData;
    }

    @Get()
    async getProducts() {
        return this.productRepository.getAll();
    }

}
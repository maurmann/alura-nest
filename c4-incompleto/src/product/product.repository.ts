/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductRepository {

    private products = [];

    async create(product) {
        this.products.push(product);
    }

    async getAll() {
        return this.products;
    }
}
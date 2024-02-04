/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductDetail } from "./product-detail.entity";

@Entity({ name: 'product' })
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', length: '50', nullable: false })
    name: string;

    @Column({ name: 'description', length: '255', nullable: false })
    description: string;

    @Column({ name: 'price' })
    price: number;

    @Column({ name: 'stock_quantity' })
    stockQuantity: number;

    @OneToMany(() => ProductDetail, (productDetail) => productDetail.product, { cascade: ['insert'], eager: true })
    details: ProductDetail[];

    // TODO: tentar com cascade: true 

}
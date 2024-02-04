/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToOne } from "typeorm";
import { Product } from "./product.entity";

@Entity({ name: 'product_detail' })
export class ProductDetail {

    /*
    @PrimaryGeneratedColumn('uuid')
    id: string;
    */

    @Column({ name: 'name', length: '50', nullable: false })
    name: string;

    @Column({ name: 'description', length: '255', nullable: false })
    description: string;

    @ManyToOne(() => Product, (product) => product.details, { orphanedRowAction: 'delete', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    product: Product;
}
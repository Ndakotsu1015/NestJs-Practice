import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from './product.model';

@Injectable()
export class ProductsService {
    private products: Product[] = [];

    insertProduct(title: string, description: string, price: number): string {

        const productId = Math.random().toString();
        const newProduct = new Product(productId, title, description, price);

        this.products.push(newProduct);

        return productId;
    }

    getProducts() {
        return [...this.products];
    }

    getSingleProduct(productId: string) {

        const product = this.findProduct(productId)[0];

        return { ...product };

    }
    updateProduct(productId: string, title: string, description: string, price: number) {
        const [product, index] = this.findProduct(productId);
        const updateProduct = { ...product };

        if (title) {
            updateProduct.title = title;
        }
        if (description) {
            updateProduct.description = description;

        }
        if (price) {
            updateProduct.price = price;

        }

        this.products[index] = updateProduct;
    }
    deleteProduct(prodId: string) {
        const index = this.findProduct(prodId)[1];
        this.products.splice(index, 1);
    }
    private findProduct(id: string): [Product, number] {
        const productIndex = this.products.findIndex(pro => pro.id === id);
        const product = this.products[productIndex];

        if (!product) {
            throw new NotFoundException('Could not find product.');
        }
        return [product, productIndex];
    }
}  
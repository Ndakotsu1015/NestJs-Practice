import { Body, Controller, Post, Get, Param, Patch, Delete } from '@nestjs/common'
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private readonly productService: ProductsService) { }
    @Post()
    addProduct(@Body('title') proTitle: string, @Body('description') proDescription: string,
        @Body('price') proPrice: number) {

        const generatedId = this.productService.insertProduct(proTitle, proDescription, proPrice);

        return { id: generatedId };

    }

    @Get()
    getAllProducts() {
        return { products: this.productService.getProducts() };
    }

    @Get(':id')
    getProducts(@Param('id') productId: string) {
        return { products: this.productService.getSingleProduct(productId) };

    }

    @Patch(':id')
    updateProducts(@Param('id') productId: string, @Body('title') prodTitle: string, @Body('description') proDescription: string,
        @Body('price') proPrice: number) {

        this.productService.updateProduct(productId, prodTitle, proDescription, proPrice);
        return null;
    }

    @Delete(':id')
    removeProduct(@Param('id') prodId: string,) {
        this.productService.deleteProduct(prodId);
        return null;
    }

}
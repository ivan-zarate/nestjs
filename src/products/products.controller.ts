import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ConfigService } from '@nestjs/config'

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService,
    private  config:ConfigService) { }

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    try {
      const newProduct = await this.productsService.create(createProductDto);
      return { status: 'succes', data: newProduct };
    } catch (error) {
      return { status: 'error', message: error.message };
    }
  }

  @Get()
  async findAll() {
    try {
      const products = await this.productsService.findAll();
      return { status: 'succes', data: products };
    } catch (error) {
      return { status: 'error', message: error.message };
    }
  }

  @Get(':name')
  async findOne(@Param('name') name: Object) {
    try {
      const product= await this.productsService.findOne({name});
      return { status: 'succes', data: product };
    } catch (error) {
      return { status: 'error', message: error.message };
    }
  }

  @Patch(':id')
  async update(@Param('id') _id: Object, @Body() updateProductDto: UpdateProductDto) {
    try {
      const updatedProduct=await this.productsService.update({_id}, updateProductDto);
      return { status: 'succes', data: updatedProduct };
    } catch (error) {
      return { status: 'error', message: error.message };
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.productsService.remove(id);
      return { status: 'succes', message: 'Producto eliminado' };
    } catch (error) {
      return { status: 'error', message: error.message };
    }
    
  }
}

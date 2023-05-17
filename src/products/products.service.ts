import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { log } from 'console';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>
  ){}
  create(createProductDto: CreateProductDto) {
    return this.productModel.create(createProductDto);
  }

  findAll() {
    return this.productModel.find();
  }

  findOne(name: Object) {
    return this.productModel.findOne(name);
  }

  update(id: Object, updateProductDto: UpdateProductDto) {
    return this.productModel.updateOne(id, updateProductDto);
  }

  remove(id: String) {
    return this.productModel.findByIdAndDelete(id);
  }
}

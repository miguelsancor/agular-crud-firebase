import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Product} from '../models/product';
import { getLocaleDateFormat } from '@angular/common';

@Injectable()
export class ProductService {

productList: AngularFireList<any>;
selectedProduct: Product = new Product();

  constructor( private firebase: AngularFireDatabase) { }

  getProducts ()
  {
    return this.productList = this.firebase.list('products');
    
  }
  

  insertProduct(product: Product)
  {
    this.productList.push({
      name: product.name,
      day: product.day,
      price: product.price
  });

  }
 updateProduct(product: Product)
  {
      this.productList.update(product.$key, {
      name: product.name,
      day: product.day,
     
      price: product.price
    });
  }

  deleteProduct($key: string)
  {
    this.productList.remove($key);
  }
}

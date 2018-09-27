import { Component, OnInit,  } from '@angular/core';
//Services
import { ProductService } from '../../../services/product.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

//product
import { Product } from '../../../models/product';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    public productService: ProductService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.productService.getProducts();
    this.resetForm();
  }
  OnSubmit(productForm: NgForm)
  {
    if (productForm.value.$key == null)
    this.productService.insertProduct(productForm.value)
    else
    this.productService.updateProduct(productForm.value);
    this.resetForm(productForm);
    this.toastr.success('Successful Operation', 'Succesful Operation')
  }
  resetForm(productForm?: NgForm)
  {
    if (productForm != null)
    productForm.reset();
    this.productService.selectedProduct = new Product();

  }

  

}

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { NgForm } from '@angular/forms';
import { Product } from '../models/product';
import { log } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Crud';
  Products: any = [];
  editProduct: any ='';
  deleteProduct: any;
  productId!: string;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.Products = data;
      console.log(this.Products);
    })
  }

  public onAddProduct(addForm: NgForm) {
    this.productService.addProduct(addForm.value)
  }

  onUpdateProduct(productId: string,product: Product){
    this.productService.updateProduct(productId, product)
  }

  onDeleteProduct(productId: string){
    productId = this.deleteProduct.id
    this.productService.deleteProduct(productId)
    
  }

  onOpenModal(product: any, mode: String){
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('class', 'modal-trigger');

    if (mode === 'add') {
      button.setAttribute('data-target', 'addProductModal');
    }
    if (mode === 'edit') {
      this.editProduct = product;
      button.setAttribute('data-target', 'updateProductModal');
    }
    if (mode === 'delete') {
      this.deleteProduct = product;
      console.log(this.deleteProduct)
      button.setAttribute('data-target', 'deleteProductModal');
    }

    container?.appendChild(button);
    button.click();

  }

  items = [
    { name: 'Edmand', age: 25 },
    { name: 'Mtumba', age: 27 }
  ]

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from './models/product';
import { ProductService } from './services/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { log } from 'console';
declare const M: any;
//import { options } from 'materialize-css';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: any = 'crud';
  products!: Array<any>;
  editProduct!: Product;
  deleteProduct!: Product;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    
    
  }

  

 
  public stock = document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, Option);
  });


  items = [
    {name:'Edmand', age: 25},
    {name:'Mtumba', age: 27}
  ]
  
}

import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor() {
    this.products = [];
    this.products.push({
    name: 'apple',
    price: 50
    });
    this.products.push({
    name: 'orange',
    price: 20
    });
    this.products.push({
    name: 'banana',
    price: 7
    });

   }

  ngOnInit(): void {
  }
  selectedProduct(product: Product) {
    alert(`Product ${product.name} selected`);
    }

}

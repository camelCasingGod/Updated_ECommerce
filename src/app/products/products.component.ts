import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$;

  constructor(productService: ProductService) {
    this.products$ = productService.getAll();
  }

  ngOnInit(): void {
  }

}

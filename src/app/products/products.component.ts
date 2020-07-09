import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$;
  categories$;

  constructor(productService: ProductService, categoryService: CategoryService) {

    this.products$ = productService.getAll();

    this.categories$ = categoryService.getAll();
    console.log(this.categories$);

  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import 'rxjs/add/operator/switchMap';
import { ShoppingCartService } from '../shopping-cart.service';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;
  cart: Observable<ShoppingCart>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService) {
    
  }

  async ngOnInit() {

    this.cart = await this.shoppingCartService.getCart();
    this.populateProducts();

  }

  private populateProducts() {

    this.productService
    .getAll()
    .switchMap(products => {
      this.products = products;
      return this.route.queryParamMap;
   })
   
    .subscribe(params => {

      this.category = params.get('category');
      this.applyFilter();

   });

  }

  private applyFilter() {

    this.filteredProducts = (this.category) ?
      this.products.filter(p => p.category === this.category) :
      this.products;

  }

}

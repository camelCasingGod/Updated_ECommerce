import { Component, OnInit } from '@angular/core';
import { Shipping } from '../models/shipping';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';
import { Subscription } from 'rxjs';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  shipping: Shipping = new Shipping();
  cart: ShoppingCart;
  subscription: Subscription;

  constructor(private shoppingCartService: ShoppingCartService, private orderService: OrderService) {}

  async ngOnInit() {

    let cart = await this.shoppingCartService.getCart();
    this.subscription = cart.subscribe(cart => this.cart = cart);

  }

  ngOnDestroy() {

    this.subscription.unsubscribe();

  }

  placeOrder() {
    
    let order = {
      datePlaced: new Date().getTime(),
      shipping: this.shipping,
      items: this.cart.items.map(i => {
        return {
          product: {
            title: i.title,
            imageUrl: i.imageUrl,
            price: i.price
          },
          quantity: i.quantity,
          totalPrice: i.totalPrice
        }
      })
    };

    this.orderService.storeOrder(order);

  }

}

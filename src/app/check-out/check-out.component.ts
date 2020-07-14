import { Component, OnInit } from '@angular/core';
import { Shipping } from '../models/shipping';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';
import { Subscription } from 'rxjs';
import { OrderService } from '../order.service';
import { AuthService } from '../auth.service';
import { Order } from '../models/order';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  shipping: Shipping = new Shipping();
  cart: ShoppingCart;
  cartSubscription: Subscription;
  userId: string;
  userSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private shoppingCartService: ShoppingCartService,
    private orderService: OrderService) {}

  async ngOnInit() {

    let cart = await this.shoppingCartService.getCart();
    this.cartSubscription = cart.subscribe(cart => this.cart = cart);
    this.authService.user$.subscribe(user => this.userId = user.uid);

  }

  ngOnDestroy() {

    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();

  }

  placeOrder() {

    let order = new Order(this.userId, this.shipping, this.cart);
    this.orderService.storeOrder(order);

  }

}

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private db: AngularFireDatabase,
    private shoppingCartService: ShoppingCartService) { }

  async placeOrder(order) {

    let result = await this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;

  }

  async placeKey(key) {
    await this.db.list('/orders/' + key).set("spId", key);
  }

  getOrders() {
    return this.db.list('/orders').valueChanges();
  }

  getOrdersByUser(userId: string) {
    return this.db.list('/orders', ref => ref.orderByChild('userId').equalTo(userId)).valueChanges();
  }

  deleteOrder(orderId: string) {
    this.db.object('/orders/' + orderId).remove();
  }

}

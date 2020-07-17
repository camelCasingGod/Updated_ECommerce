import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { UserService } from '../user.service';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {

  shoppingCartId: string;
    shippingDetails;
    items;
    cart;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private db: AngularFireDatabase) {

    this.shoppingCartId = this.route.snapshot.paramMap.get('id');

  }

  async ngOnInit() {

    this.cart = await this.db.list('/orders/' + this.shoppingCartId).valueChanges();
    this.shippingDetails = await this.db.list('/orders/' + this.shoppingCartId + '/shipping').valueChanges();
    this.items = await this.db.list('/orders/' + this.shoppingCartId + '/items').valueChanges();

  }

}

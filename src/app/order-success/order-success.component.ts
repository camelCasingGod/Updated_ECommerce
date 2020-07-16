import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent {

  shoppingCartId: string;
  items;
  shippingDetails;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private db: AngularFireDatabase) {

    this.shoppingCartId = this.route.snapshot.paramMap.get('id');
    this.items = this.db.list('/orders/' + this.shoppingCartId + '/items').valueChanges();

  }

}

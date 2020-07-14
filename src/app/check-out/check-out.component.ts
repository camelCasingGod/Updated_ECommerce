import { Component, OnInit } from '@angular/core';
import { Shipping } from '../models/shipping';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent {

  shipping: Shipping = new Shipping();

  placeOrder() {
    
    console.log(this.shipping);

  }

}

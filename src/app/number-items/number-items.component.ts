import { Component, Input } from '@angular/core';

@Component({
  selector: 'number-items',
  templateUrl: './number-items.component.html',
  styleUrls: ['./number-items.component.css']
})
export class NumberItemsComponent {

  @Input('itemCount') itemCount: number;

}

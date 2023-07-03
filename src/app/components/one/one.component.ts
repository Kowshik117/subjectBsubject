import { NumberSymbol } from '@angular/common';
import { Component } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {
  value:Number | undefined;
  constructor(private serveice: OrderService){

  }

ngOnInit(): void {

  this.serveice.getOrderCount().subscribe(x=>this.value=x);

 

}
}

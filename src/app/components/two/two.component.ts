import { Component } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent {

  value:number | undefined;

  constructor( private service: OrderService){  }

ngOnInit(): void {
 this.service.getOrderCount().subscribe(x=>this.value=x)
console.log(this.service.kow.subscribe(data=>{
  console.log(10)
}))
}

}

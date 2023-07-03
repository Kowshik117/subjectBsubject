import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
value: number=0;
constructor(private service: OrderService){

}


OnClick(){
this.service.setOrderCount(this.value);
this.service.kow.next(10);
}

}

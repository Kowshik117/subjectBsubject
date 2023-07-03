import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, count} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  constructor() {
   }

  private _orderCout= new BehaviorSubject<number>(5);

  public kow = new Subject<number>();

   private _orderCount$=this._orderCout.asObservable()

  getOrderCount(): Observable<number>{
   return  this._orderCount$;
  }
  setOrderCount(latestValue:number){
    return this._orderCout.next(latestValue)

  }

  }

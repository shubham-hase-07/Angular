import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodOrder } from 'src/app/sharepage/foodorder';
import { Observable } from 'rxjs';
import { FoodItem } from 'src/app/sharepage/fooditem';
@Injectable({
  providedIn: 'root'
})
export class OrderFoodService {

  constructor(private http: HttpClient) {}
  postOrderUrl = "http://localhost:3000/orderList";  

    postOrderFood(orderObj: any): Observable<any> {
      //console.log(orderObj)
       return this.http.post<any>(this.postOrderUrl, orderObj);
     }
   }


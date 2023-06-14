import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FoodItem } from 'src/app/sharepage/fooditem';
@Injectable({
  providedIn: 'root'
})
export class FooditemService {

  constructor(private http: HttpClient) { }
  getFoodItemURL = "http://localhost:3000/foodItemList";
  getFoodItems(){

    return this.http.get<FoodItem[]>(this.getFoodItemURL);
    
  }
}

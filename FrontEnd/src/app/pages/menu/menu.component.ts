import { Component, OnInit } from '@angular/core';
import {FooditemService} from './fooditem.service';
import {FoodItem} from '../../sharepage/fooditem'
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  foodItems: Array <FoodItem> = [];
  errorMessage: String = "";
 

  constructor(private foodService: FooditemService, private router: Router) { }

  getFoodItems() {
    this.foodItems = []; 
    this.errorMessage = "";

    this.foodService.getFoodItems().subscribe(response => {
      console.warn("response", response)
      this.foodItems = response;
    }, error => {
      this.errorMessage = error.message;
    })
  }

  ngOnInit(): void {
    this.getFoodItems();
  }
  
  orderBurger(item: FoodItem){
    this.router.navigate(['/order', item.foodName])
  }

}

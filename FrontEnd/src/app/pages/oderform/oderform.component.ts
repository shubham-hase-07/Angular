import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { OrderFoodService } from './order-food.service';


@Component({
  selector: 'app-oderform',
  templateUrl: './oderform.component.html',
  styleUrls: ['./oderform.component.css']
})
export class OderformComponent implements OnInit {
  orderForm!: FormGroup;
  foodName!: String; 
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private _router: ActivatedRoute, private OrderFoodService: OrderFoodService) { }

  ngOnInit(): void {
    this._router.params.subscribe(data => {
      this.foodName = data['foodName'];
    })

    this.orderForm=this.fb.group({
      foodName: [{value: this.foodName, disabled: true}, [Validators.required,]],
      emailId: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', [Validators.required, this.validateAddress]],
      quantity: ['1', [Validators.required,Validators.min(1), Validators.max(5)]],
      orderDate: ['', [Validators.required, this.validateOrderDate]]
    })
  }

  validateAddress(c: FormControl){
    let value = new String(c.value);
    let l = value.length;
    if (l > 150 || value.match("[@%?]")){
      return {addressError: true}
    } else {
      return null;
    }
  }
  validateOrderDate(c: FormGroup){
    let dateValue = new Date(c.value);
    let today = new Date();
    if (dateValue.getTime() < today.getTime()){
      return {orderDateError: true}
    } else {
      return null;
    }
  }

  orderFood(){
    console.log(this.orderForm)

    let orderObj = this.orderForm.value;
    //console.log(orderObj);
    orderObj.foodName = this.foodName;
    this.successMessage = this.errorMessage = '';
    //console.log(orderObj);
    this.OrderFoodService.postOrderFood(orderObj).subscribe((data)=>{
      this.successMessage = this.foodName+ " is ordered successfully";
      //console.log(this.successMessage);
    
    }, (error)=> {
      this.errorMessage = "Network issue !! Ordering failed"
      //console.log(this.errorMessage);
    })

    
  }

}

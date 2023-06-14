import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderForm!: FormGroup;
  foodName: String | undefined; 
  isDisabled: boolean = true;

  successMessage = '';
  errorMessage = '';


  constructor(private fb: FormBuilder ,private _router: ActivatedRoute) { }

  ngOnInit(): void {
    this._router.params.subscribe(data => {
      this.foodName = data['foodName'];
    })

    this.orderForm=this.fb.group({
      foodName: [this.foodName, [Validators.required]],
      emailId: ['', [Validators.required, Validators.pattern("[A-Za-z][A-Za-z0-9]")]],
      mobileNumber: ['', [Validators.required]],
      address: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      orderDate: ['', [Validators.required]]
    })
  }

  orderFood(){

  }

}

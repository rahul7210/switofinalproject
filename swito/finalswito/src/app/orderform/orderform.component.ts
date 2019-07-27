import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AdditemsService } from '../additems.service';

import { ViewordrService } from '../viewordr.service';
import { FormBuilder, FormGroup, Validators,NgForm } from '@angular/forms';


@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.css']
})
export class OrderformComponent implements OnInit {
  arr;
  item;
  quantity;
  price;
  phone;
  payment;
  myform: FormGroup;
  submitted = false;
  
  constructor(private us:ViewordrService,private u: AdditemsService,private formBuilder: FormBuilder) { }
 
  ngOnInit() {
    
    this.getData();


    
    this.myform = this.formBuilder.group({
      item: ['', Validators.required,Validators.maxLength(20),Validators.minLength(1)],
      
      quantity: ['', [Validators.required, Validators.minLength(1)]],
      phone: ['', Validators.required],
      Payment: ['', [Validators.required, Validators.minLength(1)]]
  });
}
  // name;

  
  getData() {
    this.u.getData().subscribe(data => { this.arr = data; });
}
// this.phone.length<10
addData(){
 
  if(this.item.length<1)
  {
    alert('Please enter a choice');
  }
if(this.phone.length<10||this.phone.length>10){
  alert('paytm Number Must be atleast 10 digit long and it should be a number');
}
else
{this.us.addData(this.item,this.quantity,this.price,this.phone,this.payment);
  // this.us.register(this.name,this.address,this.city,this.password,this.email);
  alert('your orders details submitted successfully now click on get them button to go to payment details option');
}
  

}


}
   
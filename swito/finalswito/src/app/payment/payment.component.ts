import { Component, OnInit } from '@angular/core';
import { PaymentrecordService } from '../paymentrecord.service';
import { ViewordrService } from '../viewordr.service';
import { FormBuilder, FormGroup, Validators,NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
arr;
  paytmnumber:string="";;
  items:string="";;
  amount:string="";;
  name:string="";;
  token:string="";;
  myform: FormGroup;
  submitted = false;
  
  constructor(private us: PaymentrecordService,private u: ViewordrService,private formBuilder: FormBuilder) { }
 
  ngOnInit() {
    this.getData();

 
    this.myform = this.formBuilder.group({
      paytmnumber : ['',[Validators.required, Validators.minLength(10)]],
      
      amount: ['', [Validators.required, Validators.minLength(1)]],
      name: ['', Validators.required, Validators.minLength(3)],
      token: ['', [Validators.required, Validators.minLength(1)]]
  });


  }
  getData() {
    this.u.getData().subscribe(data => { this.arr = data; });
}
  addData() {

    if(this.paytmnumber.length<10||this.paytmnumber.length==0)
  {
    alert('Please enter a valid number');
  }
else if(this.amount.length<2)
 {
   alert('Please enter a valid amount');
 }
//  else if(this.name.length<3)
//   {
//     alert('Please enter correct name');
//  }
//  else  if(this.token.length<5)
//  {
//      alert('Please enter a valid token Id');
//    }
  else{
    this.us.addData(this.paytmnumber,this.items,this.amount,this.name,this.token);
    // console.log(this.name)

    alert('form has been submitted');

  }
}

}

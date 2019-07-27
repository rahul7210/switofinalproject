import { Component, OnInit } from '@angular/core';
import { PaymentrecordService } from '../paymentrecord.service';

@Component({
  selector: 'app-viewpay',
  templateUrl: './viewpay.component.html',
  styleUrls: ['./viewpay.component.css']
})
export class ViewpayComponent implements OnInit {
  arr;
  // name;
  constructor(private us: PaymentrecordService) { }
 
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.us.getData().subscribe(data => { this.arr = data; });
}
 
delData(id) {
  this.us.delData(id);
}

}
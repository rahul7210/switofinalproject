import { Component, OnInit } from '@angular/core';
import { SignService } from '../sign.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  arr;
    // name;
    constructor(private us: SignService) { }
   
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

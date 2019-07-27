import { Component, OnInit } from '@angular/core';
import { AdditemsService } from '../additems.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  name;
 price;
  constructor(private us: AdditemsService) { }
 
  ngOnInit() {
  }
  addData() {
    this.us.addData(this.name,this.price);
    // console.log(this.name)
}
}

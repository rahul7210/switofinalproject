import { Component, OnInit } from '@angular/core';
import { AdditemsService } from '../additems.service';

@Component({
  selector: 'app-viewitems',
  templateUrl: './viewitems.component.html',
  styleUrls: ['./viewitems.component.css']
})
export class ViewitemsComponent implements OnInit {

  
  arr;
  // name;
  constructor(private us: AdditemsService) { }
 
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



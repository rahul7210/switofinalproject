import { Component, OnInit } from '@angular/core';
import { SignService } from '../sign.service';

@Component({
  selector: 'app-adminorders',
  templateUrl: './adminorders.component.html',
  styleUrls: ['./adminorders.component.css']
})
export class AdminordersComponent implements OnInit {

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
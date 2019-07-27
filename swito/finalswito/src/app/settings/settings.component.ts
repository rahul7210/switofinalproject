import { Component, OnInit } from '@angular/core';
import { SignService } from '../sign.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

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

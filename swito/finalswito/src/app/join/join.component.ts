import { Component, OnInit } from '@angular/core';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  // styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  name;
  email;
  password;
  weight;
  height;
  constructor(private us: UsersService) { }
 
  ngOnInit() {
  }
  addData() {
    this.us.addData(this.name,this.email,this.password,this.weight,this.height);
    // console.log(this.name)
}

}

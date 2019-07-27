import { Component, OnInit } from '@angular/core';
import { SignService } from '../sign.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name;
  email;
  canteenname;
  phone;
  password;
  address;
  
  constructor(private us: SignService) { }
 
  ngOnInit() {
  }
  addData() {
    this.us.addData(this.name,this.email,this.canteenname,this.phone,this.password,this.address);
    // console.log(this.name)
}


}

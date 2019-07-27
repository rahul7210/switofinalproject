import { Component, OnInit } from '@angular/core';
import { SignService } from '../sign.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:String;
  password:String;
  // name;
  // password;
  constructor(private us: SignService,) { }
 
  ngOnInit() {
  }
//   add() {
//     this.us.add(this.email,this.password);
//     // console.log(this.name)
// }

signIn(){
  this.us.signIn(this.email,this.password);
}



}

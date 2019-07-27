import { Component, OnInit } from '@angular/core';
// import { FgService } from '../fg.service';
import { SignService } from '../sign.service';

@Component({
  selector: 'app-forgotpw',
  templateUrl: './forgotpw.component.html',
  styleUrls: ['./forgotpw.component.css']
})
export class ForgotpwComponent implements OnInit {

  
  email:String;
  // password:String;
  // name;
  // password;
  constructor(private us: SignService,) { }
 
  ngOnInit() {
  }
//   add() {
//     this.us.add(this.email,this.password);
//     // console.log(this.name)
// }

signIn2(){
  this.us.signIn2(this.email);
}



}



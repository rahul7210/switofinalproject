import { Component, OnInit } from '@angular/core';
import { SignService } from '../sign.service';

@Component({
  selector: 'app-updatedpass',
  templateUrl: './updatedpass.component.html',
  styleUrls: ['./updatedpass.component.css']
})
export class UpdatedpassComponent implements OnInit {
 arr;
  name;
  email;
  canteenname;
  phone;
  password;
  address;
  
  constructor(private us: SignService) { }
  // name,email,canteenname,phone,password,address
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.us.getData().subscribe(data => { this.arr = data; });
}
  addData() {
    this.us.addData(this.name,this.email,this.canteenname,this.phone,this.password,this.address);
    // console.log(this.name)
}


up_data(name,email,canteenname,phone,password,address,id) {
  this.us.up_data(name,email,canteenname,phone,password,address,id);
 

}

delData(id) {
  this.us.delData(id);
}


}





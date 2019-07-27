import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UpdatedpassComponent } from './updatedpass/updatedpass.component';
 
 



@Injectable({
  providedIn: 'root'
})
export class SignService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient,private router : Router) {}
  addData(name,email,canteenname,phone,password,address) {
      const obj = {name,email,canteenname,phone,password,address};
      this
          .http
          .post(`${this.url}/sIndex/add`, obj)
          .subscribe(res => console.log(res));
  }


 
     
 
  getData() {
      return(
      this
          .http
          .get(`${this.url}/sIndex/view`)
      );
  }
  upData(id, name) {
      const obj = { name };
      this
          .http
          .post(`${this.url}/sIndex/update/${id}`, obj)
          .subscribe(res => console.log(res));
  }
  delData(id) {
    console.log("delete function");
      return this.http.get(`${this.url}/sIndex/delete/${id}`).subscribe();
  }
  editData(id) {
    return this
            .http
            .get(`${this.url}/sIndex/edit/${id}`);
    }
 
 
    up_data(name,email,canteenname,phone,password,address, id) {
 
      const obj = {
          name: name,
          email:email,
          canteenname :canteenname,
          phone :phone,
          password: password,
          address:address
         
        };
      this
        .http
        .put(`${this.url}/sIndex/update/${id}`,obj)
        .subscribe(res => console.log('Done'));
    }

 
signIn(email,password){
  const obj = {email, password};
  console.log(obj);
  this
    .http
    .post(`${this.url}/sIndex/signin`,obj)
    .subscribe((res:any) => {
      if(res.message){
        alert(res.message);
      }
      else{
        // ${res._id}
        this.router.navigateByUrl(`/adminorders`);
      }
    });
}
getDataById(id){
  return this
    .http
    .get(`${this.url}/getbyid/${id}`);
}


signIn2(email){
  const obj = {email};
  console.log(obj);
  this
    .http
    .post(`${this.url}/sIndex/signin2`,obj)
    .subscribe((res:any) => {
      if(res.message){
        alert(res.message);
      }
      else{
        // ${res._id}
        this.router.navigateByUrl(`/resetpw`);
      }
    });
 
}









}
// // shobhit
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { UpdateComponent } from 'Fitnesss/src/app/update/update.component';
 
// @Injectable({
//   providedIn: 'root'
// })
// export class UsersService {
 
//   url = 'http://localhost:3000';
//   constructor(private http: HttpClient) { }
//   addData(name,email,password,weight,height) {
//       const obj = {name,email,password,weight,height};
//       this
//           .http
//           .post(`${this.url}/add`, obj)
//           .subscribe(res => console.log(res));
//   }

//   tempGet(){
//     this.http.get('127.0.0.1:3000/view').subscribe(res=>alert(res));
//   }
 
//   getData() {
//       return(
//       this
//           .http
//           .get(`${this.url}/view`)
//       );
//   }
//   upData(id, name) {
//       const obj = { name };
//       this
//           .http
//           .post(`${this.url}/update/${id}`, obj)
//           .subscribe(res => console.log(res));
//   }
//   delData(id) {
//       return this.http.get(`${this.url}/delete/${id}`).subscribe();
//   }
//   editData(id) {
//     return this
//             .http
//             .get(`${this.url}/edit/${id}`);
//     }
 
 
//     up_data(name,email,password,weight,height, id) {
 
//       const obj = {
//           name: name,
//           email:email,  
//           password: password,
//           weight: weight,
//           height:height
          
//         };
//       this
//         .http
//         .post(`${this.url}/update/${id}`, obj)
//         .subscribe(res => console.log('Done'));
//       }
    
// }

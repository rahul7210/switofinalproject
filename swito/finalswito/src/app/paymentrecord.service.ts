import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PaymentrecordService {

  url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  addData(paytmnumber,items,amount,name,token) {
      const obj = {paytmnumber,items,amount,name,token};
      this
          .http
          .post(`${this.url}/pIndex/add`, obj)
          .subscribe(res => console.log(res));
  }
 
  getData() {
      return(
      this
          .http
          .get(`${this.url}/pIndex/view`)
      );
  }
  upData(id, name) {
      const obj = { name };
      this
          .http
          .post(`${this.url}/update/${id}`, obj)
          .subscribe(res => console.log(res));
  }
  delData(id) {
    console.log("delete function");
      return this.http.get(`${this.url}/delete/${id}`).subscribe();
  }
  editData(id) {
    return this
            .http
            .get(`${this.url}/edit/${id}`);
    }
 
 
    // up_data(paytmnumber,items,amount,name) {
 
    //   const obj = {
    //     paytmnumber:paytmnumber,
    //     items:items,
    //     amount:amount,
    //       name: name,
         
         
    //     };
    //   this
    //     .http
    //     .post(`${this.url}/update/${id}`, obj)
    //     .subscribe(res => console.log('Done'));
    // }
}

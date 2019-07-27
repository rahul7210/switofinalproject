import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewordrService {

  url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  addData(item,quantity,price,phone,payment) {
      const obj = { item,quantity,price,phone,payment};
      this
          .http
          .post(`${this.url}/oIndex/add`, obj)
          .subscribe(res => console.log(res));
  }
 
  getData() {
      return(
      this
          .http
          .get(`${this.url}/oIndex/view`)
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
      return this.http.get(`${this.url}/oIndex/delete/${id}`).subscribe();
  }
  editData(id) {
    return this
            .http
            .get(`${this.url}/edit/${id}`);
    }
 
 
    up_data(item,quantity,price,phone,payment,id) {
 
      const obj = {
        item:item,
        quantity:quantity,
        price:price,
          phone:phone,
          payment:payment
        };
      this
        .http
        .post(`${this.url}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }
}
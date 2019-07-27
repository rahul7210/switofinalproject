import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  addData(name,email,subject,message) {
      const obj = {name,email,subject,message};
      this
          .http
          .post(`${this.url}/mIndex/add`, obj)
          .subscribe(res => console.log(res));
  }
 
  getData() {
      return(
      this
          .http
          .get(`${this.url}/mIndex/view`)
      );
  }
  upData(id, name) {
      const obj = { name };
      this
          .http
          .post(`${this.url}/mIndex/update/${id}`, obj)
          .subscribe(res => console.log(res));
  }
  delData(id) {
    console.log("delete function");
      return this.http.get(`${this.url}/mIndex/delete/${id}`).subscribe();
  }
  editData(id) {
    return this
            .http
            .get(`${this.url}/mIndex/edit/${id}`);
    }
 
 
    up_data(name,email,password,weight,height, id) {
 
      const obj = {
          name: name,
          email:email,
          password: password,
          weight: weight,
          height:height
         
        };
      this
        .http
        .post(`${this.url}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }
}

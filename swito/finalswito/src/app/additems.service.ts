import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdditemsService {

  url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  addData(name,price) {
      const obj = {name,price};
      this
          .http
          .post(`${this.url}/bIndex/add`, obj)
          .subscribe(res => console.log(res));
  }
 
  getData() {
      return(
      this
          .http
          .get(`${this.url}/bIndex/view`)
      );
  }
  delData(id) {
    console.log("delete function");
      return this.http.get(`${this.url}/bIndex/delete/${id}`).subscribe();
  
  }
  editData(id) {
    return this
            .http
            .get(`${this.url}/edit/${id}`);
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



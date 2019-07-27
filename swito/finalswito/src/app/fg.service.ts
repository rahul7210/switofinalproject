import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FgService {


  url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  add(email) {
      const obj = {email};
      this
          .http
          .post(`${this.url}/fIndex/add`, obj)
          .subscribe(res => console.log(res));
}
getData() {
  return(
  this
      .http
      .get(`${this.url}`)
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
  return this.http.get(`${this.url}/delete/${id}`).subscribe();
}
editData(id) {
return this
        .http
        .get(`${this.url}/edit/${id}`);
}


up_data(email,id) {

  const obj = {
      
      email:email,
      
    };
  this
    .http
    .post(`${this.url}/update/${id}`, obj)
    .subscribe(res => console.log('Done'));
}
}

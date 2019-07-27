import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  add(email,password) {
      const obj = {email,password};
      this
          .http
          .post(`${this.url}/lIndex/add`, obj)
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


up_data(email,id,password) {

  const obj = {
      
      email:email,
      password:password,
      
    };
  this
    .http
    .post(`${this.url}/update/${id}`, obj)
    .subscribe(res => console.log('Done'));
}
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://localhost/IcspApi/Api/index.php/user/viewcustomer');
  }

  postusers(contact)
  {
    //return this.http.post('http://jsonplaceholder.typicode.com/posts',contact); 
    //return this.http.post('http://localhost/lab/php/json_decode.php',contact);
    return this.http.post('http://localhost/IcspApi/Api/index.php/user/createcustomer',contact);
  }

}

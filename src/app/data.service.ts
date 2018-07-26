import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  postusers(contact)
  {
    //return this.http.post('http://jsonplaceholder.typicode.com/posts',contact);
    return this.http.post('http://localhost/lab/php/json_decode.php',contact);
  }

}

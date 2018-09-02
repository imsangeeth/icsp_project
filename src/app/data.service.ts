import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.model' ;
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';

interface myData {
  error : boolean,
  message : string

}

interface isLoggedIn {
  status:boolean
}


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private serviceUrl  = "http://jsonplaceholder.typicode.com/users";

  private loggedInStatus = false

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean){
    this.loggedInStatus = value
  }

  get isLoggedIn() {
    return this.loggedInStatus
  }

  isLoggedInt() : Observable<isLoggedIn> {
    return  this.http.get<isLoggedIn>('http://localhost/IcspApi/Api/index.php/user/chceklg')
  }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl);
  }

  getUsers() {
    return this.http.get('http://localhost/IcspApi/Api/index.php/user/viewcustomer');
  }

  postusers(contact)
  {
    //return this.http.post('http://jsonplaceholder.typicode.com/posts',contact); 
    //return this.http.post('http://localhost/lab/php/json_decode.php',contact);
    return this.http.post('http://localhost/IcspApi/Api/index.php/user/createcustomer',contact);
  }

  postcontact(contact)
  {
    return this.http.post('http://localhost/IcspApi/Api/index.php/user/createcontact',contact);
  }

  postservices(contact)
  {
    return this.http.post('http://localhost/IcspApi/Api/index.php/user/createservices',contact);
  }
  
  postcampaign(contact)
  {
    return this.http.post('http://localhost/IcspApi/Api/index.php/user/createcampaign',contact);
  }
  

  geteditcontact(userId)
  {
    return this.http.get('http://localhost/IcspApi/Api/index.php/user/editcontact/'+userId);
  }

  getupdatecontact(contact)
  {
    return this.http.post('http://localhost/IcspApi/Api/index.php/user/updatecontact/',contact);
  }

  getservicesdview(userId)
  {
    return this.http.get('http://localhost/IcspApi/Api/index.php/user/servicesdetailedview/'+userId);
  }

  gettaskcomments(userId)
  {
    return this.http.get('http://localhost/IcspApi/Api/index.php/user/taskcomments/'+userId);
  }

  posttservicescomment(contact)
  {
    return this.http.post('http://localhost/IcspApi/Api/index.php/user/createtaskcomment/',contact);
  }

  getUserdetails(contact)
   {
    return this.http.post<myData>('http://localhost/IcspApi/Api/index.php/user/user_check_details/',contact);
   }


  

}

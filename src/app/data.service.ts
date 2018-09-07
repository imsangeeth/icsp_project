import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.model' ;
//import { Observable } from 'rxjs/Observable';
import { Observable,of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';


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

  private loggedInStatus = false;

  private heroesUrl = 'api/heroes';  // URL to web api

  private url

  constructor(private http: HttpClient,private auth: AuthService) { }

  setLoggedIn(value: boolean){
    this.loggedInStatus = value
  }

  get isLoggedIn() {
    return this.loggedInStatus
  }

  isLoggedInt() : Observable<isLoggedIn> {
    return  this.http.get<isLoggedIn>('https://ipocc.inaipi.me/IcspApi/Api/index.php/user/chceklg')
  }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl);
  }

  homedata(){
    return this.http.get<myData>('/user/chceklghome')
  }

  getUsers() {
    return this.http.get('https://ipocc.inaipi.me/IcspApi/Api/index.php/user/viewcustomer');
  }

  postusers(contact)
  {
    //return this.http.post('http://jsonplaceholder.typicode.com/posts',contact); 
    //return this.http.post('http://localhost/lab/php/json_decode.php',contact);
    return this.http.post('https://ipocc.inaipi.me/IcspApi/Api/index.php/user/createcustomer',contact);
  }

  postcontact(contact)
  {
    return this.http.post('https://ipocc.inaipi.me/IcspApi/Api/index.php/user/createcontact',contact);
  }

  postservices(contact)
  {
    return this.http.post('https://ipocc.inaipi.me/IcspApi/Api/index.php/user/createservices',contact);
  }

  postupdateservices(contact)
  {
    return this.http.post('https://ipocc.inaipi.me/IcspApi/Api/index.php/user/Updateservices',contact);
  }
  
  postcampaign(contact)
  {
    return this.http.post('https://ipocc.inaipi.me/IcspApi/Api/index.php/user/createcampaign',contact);
  }
  

  geteditcontact(userId)
  {
    return this.http.get('https://ipocc.inaipi.me/IcspApi/Api/index.php/user/editcontact/'+userId);
  }

  getupdatecontact(contact)
  {
    return this.http.post('https://ipocc.inaipi.me/IcspApi/Api/index.php/user/updatecontact/',contact);
  }

  getservicesdview(userId)
  {
    return this.http.get('https://ipocc.inaipi.me/IcspApi/Api/index.php/user/servicesdetailedview/'+userId);
  }

  getcontactview(userId)
  {
    return this.http.get('https://ipocc.inaipi.me/IcspApi/Api/index.php/user/contactsingledetails/'+userId);
  }

  getservicesdviedit(userId)
  {
    return this.http.get('https://ipocc.inaipi.me/IcspApi/Api/index.php/user/servicesdetailededit/'+userId);
  }


  gettaskcomments(userId)
  {
    return this.http.get('https://ipocc.inaipi.me/IcspApi/Api/index.php/user/taskcomments/'+userId);
  }

  getauditdeatils(userId)
  {
    return this.http.get('https://ipocc.inaipi.me/IcspApi/Api/index.php/user/auditdeatils/'+userId);
  }


  posttservicescomment(contact)
  {
    return this.http.post('https://ipocc.inaipi.me/IcspApi/Api/index.php/user/createtaskcomment/',contact);
  }

  getUserdetails(contact)
   {
    return this.http.post<myData>('https://ipocc.inaipi.me/IcspApi/Api/index.php/user/user_check_details/',contact);
   }


   

  

}

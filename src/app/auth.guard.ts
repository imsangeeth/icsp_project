import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
//import { truncate } from 'fs';
import { DataService } from './data.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private data: DataService,private router:Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     if(this.data.isLoggedIn){
       return true
     }
    return this.data.isLoggedInt().pipe(map(res => { 
      if(res.status){
        this.data.setLoggedIn(true)
        return true
      }else{
        this.router.navigate(['login'])
        return false
      }
         
    }))
  }
}

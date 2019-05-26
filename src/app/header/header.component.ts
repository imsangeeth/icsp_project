import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import * as $ from 'jquery';
import { Router } from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //status: boolean = false;
  serstatus: boolean = false;
  contstatus: boolean = false;
  campstatus: boolean = false;
  checkadmin : boolean = false;
  

  constructor(private data: DataService,private router: Router) { console.log(this.data.isLoggedIn); }

  ngOnInit() {

    this.data.check_admin().subscribe((response) => {

      //console.log('ss'+response['status']);
      this.checkadmin = response['status'];
    
    });
    
  
  }

  logout() 
  {
    
    this.data.logout().subscribe((response) => {
      localStorage.clearItem('loggedIn'); 
      this.router.navigate(['/login']);
      
    });
     
  }

  changeviewcustomer()
  {
   // this.status = !this.status;
  }
  changeservices()
  {
    this.serstatus = !this.serstatus;
  }
  changescontact()
  {
    this.contstatus = !this.contstatus;
  }
  changescampign()
  {
    this.campstatus = !this.campstatus;
  }

  

}

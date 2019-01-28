import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  status: boolean = false;
  serstatus: boolean = false;
  contstatus: boolean = false;
  campstatus: boolean = false;
  checkadmin : boolean = true;
  

  constructor(private data: DataService) { console.log(this.data.isLoggedIn); }

  ngOnInit() {

    this.data.check_admin().subscribe((response) => {
    
      this.checkadmin = response['status'];
    
    });
    
  
  }

  changeviewcustomer()
  {
    this.status = !this.status;
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

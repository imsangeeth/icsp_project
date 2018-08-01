import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css']
})

export class CreatecustomerComponent implements OnInit {

  firstName: string = ''
  lastName: string = ''
  DOB: string = ''
  nationality: string = ''
  emiratesid: string = ''
  email: string = ''
  insurance: string = ''
  insurancecompany: string = ''
  homeaddress: string = ''
  companyaddress: string = ''
  mobilenumber: string = ''
  gender: string = ''

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  createContact(){ 
   
    var  contact  = {
      name:  this.firstName,
      lastName:  this.lastName,
      DOB:  this.DOB,
      nationality:  this.nationality,
      emiratesid:  this.emiratesid,
      email:  this.email,
      insurance: this.insurance,
      insurancecompany: this.insurancecompany,
      homeaddress:this.homeaddress,
      companyaddress:this.companyaddress,
      mobilenumber:this.mobilenumber,
      gender: this.gender
  };
   
 
  this.data.postusers(contact).subscribe((response) => {
    console.log(response);
   });

  };

}
 
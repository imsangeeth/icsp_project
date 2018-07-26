import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css']
})
export class CreatecustomerComponent implements OnInit {

  firstName: string = '';

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  createContact(){ 
   
    var  contact  = {
      name:  this.firstName,
      address:  "Home N 333 Apartment 300",
      createdBy:  1,
      description:  "This is the third contact",
      email:  "abbess@email.com",
      first_name:  "kaya",
      isActive: true,
      last_name: "Abbes",
      phone: "00121212101"
  };
   
 
  this.data.postusers(contact).subscribe((response) => {
    console.log(response);
   });

  };

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    registerForm: FormGroup;
    submitted = false;
    firstname: string = '';
    lastname : string = '';
    email : string = '';
    companyname : string = '';
    mobilenumber : string = '';
    dob: string = '';
    Gender: string = '';
    Nationality: string = '';
    Title: string = '';
    Source: string = '';
    Type: string = '';
    emiratesId: string = '';
    insurancecard: string = '';
    insurancecompany: string = '';
    homeaddress: string = '';
    Companyaddress: string = '';
    
    msg: string = '';
    msgview = false;
    bgcolor: string = ''
    

  constructor(private formBuilder: FormBuilder,private data: DataService) { }

  angularForm = new FormGroup ({
    name: new FormControl()
  });

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      Title: ['', Validators.required],
      companyname: ['', Validators.required],
      mobilenumber: ['', Validators.required],
      dob: ['', Validators.required],
      Gender: ['', Validators.required],
      Nationality: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      Source: ['', Validators.required],
      Type: ['', Validators.required],
      emiratesId: ['', Validators.required],
      insurancecard: ['', Validators.required],
      insurancecompany: ['', Validators.required],
      homeaddress: ['', Validators.required],
      Companyaddress: ['', Validators.required],

      //password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    var  contact  = {
      firstName:  this.registerForm.get('firstname').value,
      lastname:  this.registerForm.get('lastname').value,
      Title:  this.registerForm.get('Title').value,
      companyname:  this.registerForm.get('companyname').value,
      mobilenumber: this.registerForm.get('mobilenumber').value,
      dob:  this.registerForm.get('dob').value,
      Gender:  this.registerForm.get('Gender').value,
      Nationality:  this.registerForm.get('Nationality').value,
      email:  this.registerForm.get('email').value,
      Source:  this.registerForm.get('Source').value,
      Type:  this.registerForm.get('Type').value,
      emiratesId:  this.registerForm.get('emiratesId').value,
      insurancecard:  this.registerForm.get('insurancecard').value,
      insurancecompany: this.registerForm.get('insurancecompany').value,
      homeaddress:  this.registerForm.get('homeaddress').value,
      Companyaddress:  this.registerForm.get('Companyaddress').value,
     
      
    };

  //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
   // alert(this.registerForm.get('StartTime').value)
    this.data.postusers(contact).subscribe((response) => {
      // this.registerForm.reset();
       this.msg = response['msg'];
       this.bgcolor = response['bgclr'];
       this.msgview = true;
     });
   }

   msgclose()
   {
    console.log('clicked');
    this.msgview = false;
   }

   cancel_form()
    {
      this.registerForm.reset();

    }
   




}

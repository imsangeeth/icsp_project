import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-createservice',
  templateUrl: './createservice.component.html',
  styleUrls: ['./createservice.component.css']
})
export class CreateserviceComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  customername: string = '';
  Reason: string = '';
  Description: string = '';
  Subject : string = '';
  Received : string = '';
  priority : string = '';
  assign : string = '';
  department: string = '';
  ticketstatus: string = '';
  duedate: string = '';
  phonenumber: string = '';
  policynumber : string = '';
  msgview = false;
  bgcolor: string = '';
  startDate: string = '';
  msg: string = '';
  

constructor(private formBuilder: FormBuilder,private data: DataService) { }

angularForm = new FormGroup ({
  name: new FormControl()
});

ngOnInit() {
  this.registerForm = this.formBuilder.group({
    customername: ['', Validators.required],
    Reason: ['', Validators.required],
    Description : ['', Validators.required],
    Subject : ['', Validators.required],
    Received : ['', Validators.required],
    priority : [''],
    assign : ['', Validators.required],
    department: ['', Validators.required],
    ticketstatus: ['', Validators.required],
    duedate : ['', Validators.required],
    phonenumber : ['', Validators.required],
    policynumber : ['', Validators.required],
     //email: ['', [Validators.required, Validators.email]],
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

  var  sevices  = {
    customername:  this.registerForm.get('customername').value,
    Reason:  this.registerForm.get('Reason').value,
    Description:  this.registerForm.get('Description').value,
    Subject:  this.registerForm.get('Subject').value,
    Received:  this.registerForm.get('Received').value,
    priority : this.registerForm.get('priority').value,
    assign : this.registerForm.get('assign').value,
    department:  this.registerForm.get('department').value,
    ticketstatus:  this.registerForm.get('ticketstatus').value,
    duedate:  this.registerForm.get('duedate').value,
    phonenumber:  this.registerForm.get('phonenumber').value,
    policynumber : this.registerForm.get('policynumber').value,
  
  };

//  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
 // alert(this.registerForm.get('StartTime').value)
  this.data.postservices(sevices).subscribe((response) => {
     if(response['error'] = false)
     {
        
     }
     this.registerForm.reset();
     this.msg = response['msg'];
     this.bgcolor = response['bgcolor'];
     this.msgview = true;
   });
 }

 msgclose()
 {
  console.log('clicked');
  this.msgview = false;
 }

 cancel_form()
  {this.registerForm.reset();

  }
 
}

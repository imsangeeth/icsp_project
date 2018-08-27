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
  callerTime: string = '';
  callerdate : string = '';
  callerType : string = '';
  customerType : string = '';
  Remarks : string = '';
  msg: string = '';
  msgview = false;
  bgcolor: string = '';
  startDate: string = '';
  

constructor(private formBuilder: FormBuilder,private data: DataService) { }

angularForm = new FormGroup ({
  name: new FormControl()
});

ngOnInit() {
  this.registerForm = this.formBuilder.group({
    customername: ['', Validators.required],
    Reason: ['', Validators.required],
    callerTime : ['', Validators.required],
    callerdate : ['', Validators.required],
    callerType : ['', Validators.required],
    customerType : [''],
    Remarks : ['', Validators.required],

    
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
    callerTime:  this.registerForm.get('callerTime').value,
    callerdate:  this.registerForm.get('callerdate').value,
    callerType:  this.registerForm.get('callerType').value,
    customerType : this.registerForm.get('customerType').value,
    Remarks : this.registerForm.get('Remarks').value,
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

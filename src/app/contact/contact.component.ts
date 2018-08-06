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
    firstName: string = '';
    startDate: string = '';
    destinationNumber: string = '';
    Dialer: string = '';
    Prio: string = '';
    StartTime: string = '';
    StartDateval:string = '';
    StopTime: string = '';
    StopDate: string = '';
    CallTag: string = '';
    CallTagtrack: string = '';
    msg: string = '';
    

  constructor(private formBuilder: FormBuilder,private data: DataService) { }

  angularForm = new FormGroup ({
    name: new FormControl()
  });

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      destinationNumber: ['', Validators.required],
      Dialer: ['', Validators.required],
      Prio: ['', Validators.required],
      StartTime: ['', Validators.required],
      StartDateval: ['', Validators.required],
      StopTime: ['', Validators.required],
      StopDate: ['', Validators.required],
      CallTag: ['', Validators.required],
      CallTagtrack: ['', Validators.required],
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

    var  contact  = {
      destinationNumbVal:  this.registerForm.get('destinationNumber').value,
      DialerVal:  this.registerForm.get('Dialer').value,
      PrioVal:  this.registerForm.get('Prio').value,
      StartTimeVal:  this.registerForm.get('StartTime').value,
      StartDtval: this.registerForm.get('StartDateval').value,
      StopTimeVal:  this.registerForm.get('StopTime').value,
      StopDateVal:  this.registerForm.get('StopDate').value,
      CallTagVal:  this.registerForm.get('CallTag').value,
      CallTagtrackVal:  this.registerForm.get('CallTagtrack').value,
      
    };

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
    alert(this.registerForm.get('StartTime').value)

    this.data.postcontact(contact).subscribe((response) => {
      console.log(response);
       this.msg = response['msg']
     });
   }




}

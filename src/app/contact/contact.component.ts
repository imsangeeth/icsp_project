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
    firstName: string = ''
    startDate = new Date(2018, 0, 1);
    

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
      destinationNumb:  this.registerForm.get('destinationNumber').value,
  };

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
    alert(this.registerForm.get('StartTime').value)

    this.data.postcontact(contact).subscribe((response) => {
      console.log(response);
     });
   }




}

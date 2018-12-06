import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-masterpage',
  templateUrl: './masterpage.component.html',
  styleUrls: ['./masterpage.component.css']
})
export class MasterpageComponent implements OnInit {

  registerForm: FormGroup;
  callreasonForm: FormGroup;
  submitted = false;
  callsubmitted = false;
  Calltype: string = '';
  callreason:string = '';
  msg:string = '';
  bgcolor:string = '';
  msgview:boolean = false;
  calltype$ : object;
  callreason$ : object;

  constructor(private formBuilder: FormBuilder,private data: DataService) { }

  angularForm = new FormGroup ({
    name: new FormControl()
  });

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      Calltype: ['', Validators.required],
    });

    this.callreasonForm = this.formBuilder.group({
      callreason: ['', Validators.required],
    });

    this.data.viewcalltype().subscribe(
      data => this.calltype$ = data  
    );

    this.data.viewcallreason().subscribe(
      data => this.callreason$ = data  
    );

  }

  get f() { return this.registerForm.controls; }
  get call() { return this.callreasonForm.controls; }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    var  contact  = {
      Calltype:  this.registerForm.get('Calltype').value,
      };

    console.log(contact);

    this.data.createcalltype(contact).subscribe((response) => {

      this.registerForm.reset();
  
      this.msg = response['msg'];
      this.bgcolor = response['bgcolor'];
      this.msgview = true;
    
    });

   }

  callsubmit(){

    this.callsubmitted = true;

    // stop here if form is invalid
    if (this.callreasonForm.invalid) {
        return;
    }

    var contact  = {
      callreason:  this.callreasonForm.get('callreason').value,
      };

    console.log(contact);

    this.data.createcallreason(contact).subscribe((response) => {

      this.callreasonForm.reset();
  
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
    this.callreasonForm.reset();

  }

}

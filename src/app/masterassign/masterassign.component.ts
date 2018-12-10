import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-masterassign',
  templateUrl: './masterassign.component.html',
  styleUrls: ['./masterassign.component.css']
})
export class MasterassignComponent implements OnInit {

  registerForm: FormGroup;
  callreasonForm: FormGroup;
  submitted = false;
  callsubmitted = false;
  DepartmentName: string = '';
  userdepartment: string = '';
  email:string = '';
  username:string = '';
  msg:string = '';
  bgcolor:string = '';
  msgview:boolean = false;
  calltype$ : object;
  callreason$ : object;
  iscalltypebutton:boolean = true;
  iscalltypeupdatebutton:boolean = false;
  iscallreasonbutton:boolean = true;
  iscallreasonupdatebutton:boolean = false;
  updatedId  = 0;
  updatedreasonId= 0;

  constructor(private formBuilder: FormBuilder,private data: DataService) { }

  angularForm = new FormGroup ({
    name: new FormControl()
  });


  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      DepartmentName: ['', Validators.required],
    });

    this.callreasonForm = this.formBuilder.group({
      username: ['', Validators.required],
      userdepartment : ['', Validators.required],
      email : ['', Validators.required],
    });

    this.data.viewdepartment().subscribe(
      data => this.calltype$ = data  
    );

    this.data.viewdepartmentuser().subscribe(
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
      DepartmentName:  this.registerForm.get('DepartmentName').value,
      updatedval:  this.updatedId
      };

  
    this.data.createnewdepartment(contact).subscribe((response) => {

       this.registerForm.reset();
  
       this.msg = response['msg'];
       this.bgcolor = response['bgcolor'];
       this.msgview = true;
    
       this.data.viewdepartment().subscribe(
        data => this.calltype$ = data  
        );

    });

   }


   editcalltype(ky)
   {
     
     this.updatedId = ky;

    this.iscalltypebutton = false;
    this.iscalltypeupdatebutton = true;

     var edittype  = {
      callnu: ky,
      };

      this.data.editdepartment(edittype).subscribe((response) => {

        this.registerForm.controls['DepartmentName'].setValue(response['department']);
      
      });
  
   }


   editcallreason(ky)
   {
     
     this.updatedreasonId = ky;
     
    this.iscallreasonbutton = false;
    this.iscallreasonupdatebutton = true;

     var edittype  = {
      callnu: ky,
      };

      this.data.editdepartmentuser(edittype).subscribe((response) => {

        this.callreasonForm.controls['userdepartment'].setValue(response['department']);
        this.callreasonForm.controls['username'].setValue(response['name']);
        this.callreasonForm.controls['email'].setValue(response['email']);
      
      });
  
   }



   deletetype(ky)
   {
     var edittype  = {
      callnu: ky,
      };

      this.data.deletedepartment(edittype).subscribe((response) => {

        this.msg = response['msg'];
        this.bgcolor = response['bgcolor'];
        this.msgview = true;

        this.data.viewdepartment().subscribe(
          data => this.calltype$ = data  
          );
      });
   }


   deletereason(ky)
   {
     var edittype  = {
      callnu: ky,
      };

      this.data.deletedepartmentuser(edittype).subscribe((response) => {

        this.msg = response['msg'];
        this.bgcolor = response['bgcolor'];
        this.msgview = true;

        this.data.viewdepartmentuser().subscribe(
          data => this.callreason$ = data  
        );

      });
  
   }

  

  callsubmit(){

    this.callsubmitted = true;

    // stop here if form is invalid
    if (this.callreasonForm.invalid) {
        return;
    }

    var contact  = {
      username:  this.callreasonForm.get('username').value,
      userdepartment:  this.callreasonForm.get('userdepartment').value,
      email:  this.callreasonForm.get('email').value,
      updatedval:  this.updatedreasonId
      };

    console.log(contact);

     this.data.createdepartmentuser(contact).subscribe((response) => {

     this.callreasonForm.reset();
  
      this.msg = response['msg'];
      this.bgcolor = response['bgcolor'];
      this.msgview = true;

      this.data.viewdepartmentuser().subscribe(
      data => this.callreason$ = data  
      );
    
       });

  }

  msgclose()
 {
  console.log('clicked');
  this.msgview = false;
 }

 cancel_form()
 {
  this.updatedId = 0;
  this.iscalltypebutton = true;
  this.iscalltypeupdatebutton = false;
  this.registerForm.controls['DepartmentName'].setValue('');
 }

 cancel_reason_form()
 {
  this.updatedreasonId = 0;
  this.iscallreasonbutton = true;
  this.iscallreasonupdatebutton = false;
  this.callreasonForm.controls['userdepartment'].setValue('');
  this.callreasonForm.controls['username'].setValue('');
  this.callreasonForm.controls['email'].setValue('');
 }



}

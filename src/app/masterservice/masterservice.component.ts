import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-masterservice',
  templateUrl: './masterservice.component.html',
  styleUrls: ['./masterservice.component.css']
})
export class MasterserviceComponent implements OnInit {

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
  category1: string = '';
  category2: string = '';
  newfiled: string = '';
  sub$ : object
  constructor(private formBuilder: FormBuilder,private data: DataService) { }

  angularForm = new FormGroup ({
    name: new FormControl()
  });


  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      category1: ['', Validators.required],
      category2: ['', Validators.required],
      newfiled : ['', Validators.required],
    });

     this.data.viewservices_module().subscribe(
     data => this.calltype$ = data  
      );
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {

    this.submitted = true;

    

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    var  contact  = {
      category1:  this.registerForm.get('category1').value,
      category2:  this.registerForm.get('category2').value,
      newfiled:  this.registerForm.get('newfiled').value,
      updatedval:  this.updatedId
      };



    console.log(contact);
  
   this.data.creatmasterservice(contact).subscribe((response) => {

      this.registerForm.reset();
  
      this.msg = response['msg'];
      this.bgcolor = response['bgcolor'];
      this.msgview = true;
    
    //    this.data.viewdepartment().subscribe(
    //     data => this.calltype$ = data  
    //     );

    });

   }

   onChangeoffice(deviceValue)
   {
    this.data.viewservices_module_filed(deviceValue).subscribe(
     data => this.sub$ = data  
    );
   }

   onChangecategory()
   {

    var  contact  = {
      category1:  this.registerForm.get('category1').value,
      category2:  this.registerForm.get('category2').value,
      newfiled:  this.registerForm.get('newfiled').value,
      };

    
      this.data.viewcategory_list(contact).subscribe((response) => {
        this.callreason$ = response;
        
    
      });
   }

   editcalltype(ky)
   {
     
     this.updatedId = ky;

    this.iscalltypebutton = false;
    this.iscalltypeupdatebutton = true;

     var edittype  = {
      callnu: ky,
      category2:  this.registerForm.get('category2').value,
      };

      this.data.editcategory_list(edittype).subscribe((response) => {

        this.registerForm.controls['newfiled'].setValue(response['name']);
      
      });
  
   }


   deletetype(ky)
   {
    var edittype  = {
      callnu: ky,
      category2:  this.registerForm.get('category2').value,
      };

      this.data.delete_list(edittype).subscribe((response) => {

  
      
      });
   }

}

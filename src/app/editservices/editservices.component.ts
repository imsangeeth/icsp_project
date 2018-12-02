import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-editservices',
  templateUrl: './editservices.component.html',
  styleUrls: ['./editservices.component.css']
})
export class EditservicesComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

 
  
 
  assign : string = '';
  department: string = '';
  ticketstatus: string = '';
  duedate: string = '';
  msgview = false;
  bgcolor: string = '';
  startDate: string = '';
  msg: string = '';

  contactId ;
  user$: Object;


  constructor(private formBuilder: FormBuilder,private data: DataService,private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.user$ = params.id  );
    this.contactId = this.user$;
   }

  angularForm = new FormGroup ({
    name: new FormControl()
  });

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
     
      
      assign : ['', Validators.required],
      department: ['', Validators.required],
      ticketstatus: ['', Validators.required],
      duedate : ['', Validators.required],
    
     
       //email: ['', [Validators.required, Validators.email]],
      //password: ['', [Validators.required, Validators.minLength(6)]]
  });

  this.data.getservicesdviedit(this.user$).subscribe((response) => {

    this.registerForm.controls['assign'].setValue(response['assign']);
    this.registerForm.controls['department'].setValue(response['department']);
    this.registerForm.controls['ticketstatus'].setValue(response['ticketstatus']);
    this.registerForm.controls['duedate'].setValue(new Date(response['duedate']));
    

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
   
    assign : this.registerForm.get('assign').value,
    department:  this.registerForm.get('department').value,
    ticketstatus:  this.registerForm.get('ticketstatus').value,
    duedate:  this.registerForm.get('duedate').value,
    ticketid : this.contactId
  
  };

//  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
 // alert(this.registerForm.get('StartTime').value)
  this.data.postupdateservices(sevices).subscribe((response) => {
     
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

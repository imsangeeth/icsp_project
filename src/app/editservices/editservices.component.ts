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
  IndividualForm : FormGroup;
  submitted = false;
  ind_submitted = false;
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


  Insurancetype:string;
  Individual_two:String;
  Individual_three:string;
  Individual_four:String;
  Individual_five:string;
  Individual_six:string;
  Individual_sevan:string;
  Individual_eight:string;
  Individual_nine:string;
  ser_assign:string;
  ser_department:string;
  ser_comment:string;
  Remarks:string;
  insurancetype$:object;
  insphase2$:object;
  insphase3$:object;
  insphase4$:object;
  insphase5$:object;
  insphase6$:object;
  insphase7$:object;
  insphase8$:object;
  insphase9$:object;
  inbound1$:object;
  inbound2$:object;
  inbound3$:object;
  getoffice_department:object;
  office_department_user$:object;


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

  this.IndividualForm = this.formBuilder.group({

    Insurancetype: ['', Validators.required],
    Individual_two: ['', Validators.required],
    Individual_three : ['', Validators.required],
    Individual_four : ['', Validators.required],
    Individual_five : ['', Validators.required],
    ticketstatus: [''],
    Individual_six : [''],
    Individual_sevan: [''],
    Individual_eight: [''],
    Individual_nine : [''],
    ser_assign:[''],
    ser_department:[''],
    ser_comment:[''],
    Remarks:[''],
   
  });

  this.data.getservicesdviedit(this.user$).subscribe((response) => {

    this.registerForm.controls['assign'].setValue(response['assign']);
    this.registerForm.controls['department'].setValue(response['department']);
    this.registerForm.controls['ticketstatus'].setValue(response['ticketstatus']);
    this.registerForm.controls['duedate'].setValue(new Date(response['duedate']));
    

  });

  this.data.insuranctype().subscribe(
    data => this.insurancetype$ = data
  );

  this.data.getoffice_department().subscribe(
    data => this.getoffice_department = data  
  );
  


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

 onSubmit_individual() {

  this.ind_submitted = true;

  // stop here if form is invalid
  if (this.IndividualForm.invalid) {
      return;
  }

  var individual  = {

    Insurancetype:  this.IndividualForm.get('Insurancetype').value,
    Individual_two:  this.IndividualForm.get('Individual_two').value,
    Individual_three:  this.IndividualForm.get('Individual_three').value,
    Individual_four:  this.IndividualForm.get('Individual_four').value,
    Individual_five:  this.IndividualForm.get('Individual_five').value,
    Individual_six : this.IndividualForm.get('Individual_six').value,
    Individual_sevan : this.IndividualForm.get('Individual_sevan').value,
    Individual_eight:  this.IndividualForm.get('Individual_eight').value,
    Individual_nine:  this.IndividualForm.get('Individual_nine').value,
    ser_department: this.IndividualForm.get('ser_department').value,
    ser_assign:  this.IndividualForm.get('ser_assign').value,
    ser_comment:this.IndividualForm.get('ser_comment').value,
    Remarks:  this.IndividualForm.get('Remarks').value,
    ticketstatus:  this.registerForm.get('ticketstatus').value,
    ticketid : this.contactId
   
  };

  console.log(individual);

//  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
 // alert(this.registerForm.get('StartTime').value)
  
 }

 onChangedepartment(depID)
 {
  this.data.office_department_user(depID).subscribe(
    data => this.office_department_user$ = data  
   ); 
 }

 onChangeInsType(typid)
 {
  this.insphase3$ = Array();  
  this.insphase4$ = Array();  
  this.insphase5$ = Array();  
  this.insphase6$ = Array();  
  this.insphase7$ = Array();  
  this.insphase8$ = Array();  
  this.insphase9$ = Array();  
  
  this.data.insurance_phase2(typid).subscribe(
    data => this.insphase2$ = data  
   ); 
 }

 onChangeInsphase2(phaseId)
 {
  this.insphase4$ = Array();  
  this.insphase5$ = Array();  
  this.insphase6$ = Array();  
  this.insphase7$ = Array();  
  this.insphase8$ = Array();  
  this.insphase9$ = Array();  

   this.data.insurance_phase3(phaseId).subscribe(
    data => this.insphase3$ = data  
   ); 
 }

 onChangeInsphase3(phaseId)
 {
  
  this.insphase5$ = Array();  
  this.insphase6$ = Array();  
  this.insphase7$ = Array();  
  this.insphase8$ = Array();  
  this.insphase9$ = Array();  
   this.data.insurance_phase4(phaseId).subscribe(
    data => this.insphase4$ = data  
   ); 
 }

 onChangeInsphase4(phaseId)
 {
  
  this.insphase6$ = Array();  
  this.insphase7$ = Array();  
  this.insphase8$ = Array();  
  this.insphase9$ = Array();  
   this.data.insurance_phase5(phaseId).subscribe(
    data => this.insphase5$ = data  
   ); 
 }

 onChangeInsphase5(phaseId)
 {
  
  this.insphase7$ = Array();  
  this.insphase8$ = Array();  
  this.insphase9$ = Array();  

   this.data.insurance_phase6(phaseId).subscribe(
    data => this.insphase6$ = data  
   ); 
 }

 onChangeInsphase6(phaseId)
 {
 
  this.insphase8$ = Array();  
  this.insphase9$ = Array();  

  this.data.insurance_phase7(phaseId).subscribe(
    data => this.insphase7$ = data  
   ); 
 }

 onChangeInsphase7(phaseId)
 {
  this.insphase9$ = Array();  

  this.data.insurance_phase8(phaseId).subscribe(
    data => this.insphase8$ = data  
   ); 
 }

 onChangeInsphase8(phaseId)
 {
  this.data.insurance_phase9(phaseId).subscribe(
    data => this.insphase9$ = data  
   ); 
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

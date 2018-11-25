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
  IndividualForm : FormGroup;
  submitted = false;
  ind_submitted = false;
  location$: Object;
  branch$: Object;
  branchaddress$:object;
  insurancetype$:object;
  insphase2$:object;
  insphase3$:object;
  insphase4$:object;
  insphase5$:object;
  insphase6$:object;
  insphase7$:object;
  insphase8$:object;
  insphase9$:object;
  getoffice_department:object;
  office_department_user$:object;

  allCopType$:object;

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
  Remarks:string;


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

this.IndividualForm = this.formBuilder.group({

  Insurancetype: ['', Validators.required],
  Individual_two: ['', Validators.required],
  Individual_three : ['', Validators.required],
  Individual_four : ['', Validators.required],
  Individual_five : ['', Validators.required],
  Individual_six : [''],
  Individual_sevan: [''],
  Individual_eight: [''],
  Individual_nine : [''],
  ser_assign:[''],
  ser_department:[''],
  Remarks:[''],
 
});

this.data.getofficelocation().subscribe(
  data => this.location$ = data  
);

this.data.getoffice_department().subscribe(
  data => this.getoffice_department = data  
);


this.data.insuranctype().subscribe(
  data => this.insurancetype$ = data  
);

this.data.allCopType().subscribe(
  data => this.allCopType$ = data  
);



}

get f() { return this.registerForm.controls; }
get individual() { return this.IndividualForm.controls; }

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
    Remarks:  this.IndividualForm.get('Remarks').value,
   
  };

  console.log(individual);

//  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
 // alert(this.registerForm.get('StartTime').value)

 this.data.createservice_ind(individual).subscribe((response) => {
  
});



  
 }


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

 onChangeoffice(deviceValue)
 {
    this.data.branchoffice(deviceValue).subscribe(
     data => this.branch$ = data  
    );
 }


 onChangeadreess(brancId)
 {
   this.data.branchaddress(brancId).subscribe(
    data => this.branchaddress$ = data  
   ); 
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

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
  corporateForm:FormGroup;
  inboundForm:FormGroup;
  inbound_submitted = false;
  submitted = false;
  ind_submitted = false;
  cop_submitted = false;
  assign : string = '';
  department: string = '';
  ticketstatus: string = '';
  ticketstatus_cop :string = '';
  duedate: string = '';
  msgview = false;
  bgcolor: string = '';
  startDate: string = '';
  msg: string = '';

  contactId ;
  user$: Object;
  allCopType$ : object;
  servicetype$: string;


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

  Corporatetype:string;
  Corporate_two:String;
  Corporate_three:string;
  Corporate_four:String;
  Corporate_five:string;
  Corporate_assign:string;
  Corporate_department:string;
  CorporateRemarks:string;
  
  copphase9$:object;
  copphase10$:object;
  copphase11$:object;
  copphase12$:object;

  allinbound$:object;
  inboundtype:string;
  inboundtype_two:String;
  inboundtype_three:string;
  inboundtype_four:String;
  inboundtype_assign:string;
  inboundtype_department:string;
  inboundtypeRemarks:string;
  inboundtypecomment:string;
  inboundtypeticketstatus:string;
  


  constructor(private formBuilder: FormBuilder,private data: DataService,private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.user$ = params.id  );
    this.route.params.subscribe( params => this.servicetype$ = params.type  );
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
    ticketstatus_cop: [''],
    Individual_six : [''],
    Individual_sevan: [''],
    Individual_eight: [''],
    Individual_nine : [''],
    ser_assign:[''],
    ser_department:[''],
    ser_comment:[''],
    Remarks:[''],
   
  });


  this.corporateForm = this.formBuilder.group({

    Corporatetype: ['', Validators.required],
    Corporate_two: ['', Validators.required],
    Corporate_three : ['', Validators.required],
    Corporate_four : ['', Validators.required],
    Corporate_five : [''],
    Corporate_assign:[''],
    Corporate_department:[''],
    CorporateRemarks:[''],
    ticketstatus: [''],

  
  });


  this.inboundForm = this.formBuilder.group({

    inboundtype: ['', Validators.required],
    inboundtype_two: ['', Validators.required],
    inboundtype_three : ['', Validators.required],
    inboundtype_four : ['', Validators.required],
    inboundtype_assign : [''],
    inboundtype_department:[''],
    inboundtypeRemarks:[''],
    inboundtypeticketstatus: [''],

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

  this.data.allinbound().subscribe(
    data => this.allinbound$ = data  
  );

  this.data.services_csp_inbound_phase1(this.user$).subscribe(
    data => this.inbound1$ = data
  );

  this.data.services_csp_inbound_phase2(this.user$).subscribe(
    data => this.inbound2$ = data
  );

  this.data.services_csp_inbound_phase3(this.user$).subscribe(
    data => this.inbound3$ = data
  );

  this.data.services_csp_corporate_phase1(this.user$).subscribe(
    data => this.copphase9$ = data
  );

  this.data.services_csp_corporate_phase2(this.user$).subscribe(
    data => this.copphase10$ = data
  );

  this.data.services_csp_corporate_phase3(this.user$).subscribe(
    data => this.copphase11$ = data
  );

  this.data.services_csp_corporate_phase4(this.user$).subscribe(
    data => this.copphase12$ = data
  );


  this.data.services_csp_insurance_phase2(this.user$).subscribe(
    data => this.insphase2$ = data
  );

  this.data.services_csp_insurance_phase3(this.user$).subscribe(
    data => this.insphase3$ = data
  );

  this.data.services_phase_category1(this.user$).subscribe(
    data => this.insphase4$ = data
  );


  this.data.services_phase_category2(this.user$).subscribe(
    data => this.insphase5$ = data
  );

  this.data.services_phase_category3(this.user$).subscribe(
    data => this.insphase6$ = data
  );

  this.data.services_phase_category4(this.user$).subscribe(
    data => this.insphase7$ = data
  );

  this.data.services_phase_category5(this.user$).subscribe(
    data => this.insphase8$ = data
  );
  this.data.services_phase_category6(this.user$).subscribe(
    data => this.insphase9$ = data
  );

  this.data.services_phase_user(this.user$,this.servicetype$).subscribe(
    data => this.office_department_user$ = data
  );


  this.data.getoffice_department().subscribe(
    data => this.getoffice_department = data  
  );

  this.data.allCopType().subscribe(
    data => this.allCopType$ = data  
  );
  

  this.data.single_edit_view_service(this.user$).subscribe((response) => {

    this.IndividualForm.controls['Insurancetype'].setValue(response['csp_insurance_type']);
    this.IndividualForm.controls['Individual_two'].setValue(response['csp_insurance_phase2']);
    this.IndividualForm.controls['Individual_three'].setValue(response['csp_insurance_phase3']);
    this.IndividualForm.controls['Individual_four'].setValue(response['phase_category1']);
    this.IndividualForm.controls['Individual_five'].setValue(response['phase_category2']);
    this.IndividualForm.controls['Individual_six'].setValue(response['phase_category3']);
    this.IndividualForm.controls['Individual_sevan'].setValue(response['phase_category4']);
    this.IndividualForm.controls['Individual_eight'].setValue(response['phase_category5']);
    this.IndividualForm.controls['Individual_nine'].setValue(response['phase_category6']);
    this.IndividualForm.controls['Remarks'].setValue(response['remarks']);
    this.IndividualForm.controls['ser_department'].setValue(response['csp_office_department']);
    this.IndividualForm.controls['ser_assign'].setValue(response['csp_department_user']);
    this.corporateForm.controls['Corporatetype'].setValue(response['csp_corporate_type']);
    this.corporateForm.controls['Corporate_department'].setValue(response['csp_office_department']);
    this.corporateForm.controls['Corporate_assign'].setValue(response['csp_department_user']);
    this.corporateForm.controls['Corporate_two'].setValue(response['csp_corporate_phase1']);
    this.corporateForm.controls['Corporate_three'].setValue(response['csp_corporate_phase2']);
    this.corporateForm.controls['Corporate_four'].setValue(response['csp_corporate_phase3']);
    this.corporateForm.controls['Corporate_five'].setValue(response['csp_corporate_phase4']);
    this.corporateForm.controls['CorporateRemarks'].setValue(response['remarks']);
    this.inboundForm.controls['inboundtype'].setValue(response['csp_inbound_phase1']);
    this.inboundForm.controls['inboundtype_two'].setValue(response['csp_inbound_phase2']);
    this.inboundForm.controls['inboundtype_three'].setValue(response['csp_inbound_phase3']);
    this.inboundForm.controls['inboundtype_four'].setValue(response['csp_inbound_phase4']);
    this.inboundForm.controls['inboundtypeRemarks'].setValue(response['remarks']);
    this.inboundForm.controls['inboundtype_department'].setValue(response['csp_office_department']);
    this.inboundForm.controls['inboundtype_assign'].setValue(response['csp_department_user']);

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
    ticketstatus:  this.IndividualForm.get('ticketstatus_cop').value,
    ticketid : this.contactId
   
  };

  console.log(individual);

//  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
 // alert(this.registerForm.get('StartTime').value)

 this.data.updateservice_ind(individual).subscribe((response) => {
  this.msg = response['msg'];
  this.bgcolor = response['bgcolor'];
  this.msgview = true;
});
  
 }

 onSubmit_corporate() {

  this.cop_submitted = true;

  // stop here if form is invalid
  if (this.corporateForm.invalid) {
      return;
  }

  var corporates  = {
    Corporatetype:  this.corporateForm.get('Corporatetype').value,
    Corporate_two:  this.corporateForm.get('Corporate_two').value,
    Corporate_three:  this.corporateForm.get('Corporate_three').value,
    Corporate_four:  this.corporateForm.get('Corporate_four').value,
    Corporate_five:  this.corporateForm.get('Corporate_five').value,
    Corporate_assign : this.corporateForm.get('Corporate_assign').value,
    Corporate_department : this.corporateForm.get('Corporate_department').value,
    CorporateRemarks:  this.corporateForm.get('CorporateRemarks').value,
    ticketstatus:  this.corporateForm.get('ticketstatus').value,
    ticketid : this.contactId
  };

  console.log(corporates);

      this.data.updateservice_cop(corporates).subscribe((response) => {

      this.msg = response['msg'];
      this.bgcolor = response['bgcolor'];
      this.msgview = true;

     });

 }

 onSubmit_inbound() { 

  this.inbound_submitted = true;

  // stop here if form is invalid
  if (this.inboundForm.invalid) {
      return;
  }

  var inbound  = {
    inboundtype:  this.inboundForm.get('inboundtype').value,
    inboundtype_two:  this.inboundForm.get('inboundtype_two').value,
    inboundtype_three:  this.inboundForm.get('inboundtype_three').value,
    inboundtype_four:  this.inboundForm.get('inboundtype_four').value,
    inboundtype_assign:  this.inboundForm.get('inboundtype_assign').value,
    inboundtype_department : this.inboundForm.get('inboundtype_department').value,
    inboundtypeRemarks : this.inboundForm.get('inboundtypeRemarks').value,
    ticketstatus:  this.inboundForm.get('inboundtypeticketstatus').value,
    ticketid : this.contactId
  };

 console.log(inbound);

  this.data.updateservice_inbound(inbound).subscribe((response) => {

    this.msg = response['msg'];
    this.bgcolor = response['bgcolor'];
    this.msgview = true;

  });

//  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
 // alert(this.registerForm.get('StartTime').value)

 //this.data.createservice_ind(corporates).subscribe((response) => {
  
 //});
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


 onChangeCopType(phaseId)
 {
  this.data.cop_phase2(phaseId).subscribe(
    data => this.copphase9$ = data  
   ); 
 }

 onChangeCopType2(phaseId)
 {
  this.data.cop_phase3(phaseId).subscribe(
    data => this.copphase10$ = data  
   ); 
 }

 onChangeCopType3(phaseId)
 {
  this.data.cop_phase4(phaseId).subscribe(
    data => this.copphase11$ = data  
   ); 
 }

 onChangeCopType4(phaseId)
 {
  this.data.cop_phase5(phaseId).subscribe(
    data => this.copphase12$ = data  
   ); 
 }

 onChangeInbondType(ky)
 {
   this.data.cspinboundphase2(ky).subscribe(
  data => this.inbound1$ = data  
 );

 }

 onChangeInbondType2(ky)
 {
   this.data.cspinboundphase3(ky).subscribe(
  data => this.inbound2$ = data  
 );

 }

 onChangeInbondType3(ky)
 {
   this.data.cspinboundphase4(ky).subscribe(
  data => this.inbound3$ = data  
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

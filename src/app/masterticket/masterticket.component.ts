import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-masterticket',
  templateUrl: './masterticket.component.html',
  styleUrls: ['./masterticket.component.css']
})
export class MasterticketComponent implements OnInit {

  registerForm: FormGroup;
  IndividualForm : FormGroup;
  corporateForm:FormGroup;
  inboundForm:FormGroup;
  form: FormGroup;
  submitted = false;
  ind_submitted = false;
  cop_submitted = false;
  inbound_submitted = false; 
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
  inbound1$:object;
  inbound2$:object;
  inbound3$:object;
  getoffice_department:object;
  office_department_user$:object;

  allCopType$:object;
  copphase9$:object;
  copphase10$:object;
  copphase11$:object;
  copphase12$:object;
  updatedId  = 0;

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
  phone:string = '';


  officelocation: string = '';
  smsmobilenumber : string = '';
  branch : string = '';
  branch_department : string ='';
  branch_assign : string = '';
  branch_comment : string = '';
  selectaddress : string = '';

  Insurancetype:string = '';
  Individual_two:String = '';
  Individual_three:string = '';
  Individual_four:String = '';
  Individual_five:string = '';
  Individual_six:string = '';
  Individual_sevan:string = '';
  Individual_eight:string = '';
  Individual_nine:string = '';
  ser_assign:string = '';
  ser_department:string = '';
  ser_comment:string = '';
  Remarks:string ='';
  addnewiteam : string = '';


  Corporatetype:string = '';
  Corporate_two:String ='';
  Corporate_three:string = '';
  Corporate_four:String = '';
  Corporate_five:string = '';
  Corporate_assign:string = '';
  Corporate_department:string = '';
  CorporateRemarks:string = '';
  Corporatecomment:string = '';

  inboundtype:string = '';
  inboundtype_two:String = '';
  inboundtype_three:string = '';
  inboundtype_four:String = '';
  inboundtype_assign:string = '';
  inboundtype_department:string = '';
  inboundtypeRemarks:string = '';
  inboundtypecomment:string = '';
  phn$: string = '';
  key$: string = '';


  iscalltypebutton:boolean = true;
  iscalltypeupdatebutton:boolean = false;

  viewofficelocation : boolean = true;
  viewbranch : boolean = false;
  viewaddress : boolean = false;


  allinbound$:object;
  totalview$:object;
  totalindiv$ : object;

  fileToUpload;
  spinnloder : boolean = false;

 // private readonly newProperty = this.loading = true;

constructor(private route: ActivatedRoute,private formBuilder: FormBuilder,private data: DataService) {
 
 }

angularForm = new FormGroup ({
  name: new FormControl()
});

ngOnInit() {

  //console.log(this.phn$);

 // 
  this.registerForm = this.formBuilder.group({

    officelocation: [''],
    smsmobilenumber: ['', Validators.required],
    branch : [''],
    selectaddress : [''],

     //email: ['', [Validators.required, Validators.email]],
    //password: ['', [Validators.required, Validators.minLength(6)]]
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
  Corporatecomment:[''],

});

this.IndividualForm = this.formBuilder.group({

  Insurancetype: [''],
  Individual_two: [''],
  Individual_three : [''],
  Individual_four : [''],
  Individual_five : [''],
  Individual_six : [''],
  Individual_sevan: [''],
  Individual_eight: [''],
  Individual_nine : [''],
  addnewiteam : ['',Validators.required]
 
});


this.inboundForm = this.formBuilder.group({

  inboundtype: ['', Validators.required],
  inboundtype_two: ['', Validators.required],
  inboundtype_three : ['', Validators.required],
  inboundtype_four : ['', Validators.required],
  inboundtype_assign : [''],
  inboundtype_department:[''],
  inboundtypeRemarks:[''],
  inboundtypecomment:[''],

});

//this.registerForm.controls['smsmobilenumber'].setValue(this.phn$);

this.data.getofficelocation().subscribe((response) => {

  //data => this.location$ = data, 
  this.location$ = response;
  this.totalview$ = response;
  
});

this.data.getoffice_department().subscribe((response) => {
  this.getoffice_department = response
    
});


this.data.insuranctype().subscribe((response) => {
  this.insurancetype$ = response
  this.totalindiv$ = response  
});

this.data.allCopType().subscribe(
  data => this.allCopType$ = data  
);

this.data.allinbound().subscribe(
  data => this.allinbound$ = data  
);

}

get f() { return this.registerForm.controls; }
get individual() { return this.IndividualForm.controls; }
get corporate() { return this.corporateForm.controls; }
get inbound() { return this.corporateForm.controls; }

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
    inboundtypecomment:  this.inboundForm.get('inboundtypecomment').value,
   
    
  };

  this.data.createservice_inbound(inbound).subscribe((response) => {

    this.inboundForm.controls['inboundtype'].setValue('');
    this.inboundForm.controls['inboundtype_two'].setValue('');
    this.inboundForm.controls['inboundtype_three'].setValue('');
    this.inboundForm.controls['inboundtype_four'].setValue('');
    this.inboundForm.controls['inboundtype_assign'].setValue('');
    this.inboundForm.controls['inboundtype_department'].setValue('');
    this.inboundForm.controls['inboundtypeRemarks'].setValue('');
    this.inboundForm.controls['inboundtypecomment'].setValue('');
    
    this.msg = response['msg'];
    this.bgcolor = response['bgcolor'];
    this.msgview = true;
  
  });

//  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
 // alert(this.registerForm.get('StartTime').value)

 //this.data.createservice_ind(corporates).subscribe((response) => {
  
 //});
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
    Corporatecomment:  this.corporateForm.get('Corporatecomment').value,
   
  };

  console.log(corporates);

  this.data.createservice_cop(corporates).subscribe((response) => {

  this.corporateForm.controls['Corporatetype'].setValue('');
  this.corporateForm.controls['Corporate_two'].setValue('');
  this.corporateForm.controls['Corporate_three'].setValue('');
  this.corporateForm.controls['Corporate_four'].setValue('');
  this.corporateForm.controls['Corporate_five'].setValue('');
  this.corporateForm.controls['Corporate_assign'].setValue('');
  this.corporateForm.controls['Corporate_department'].setValue('');
  this.corporateForm.controls['CorporateRemarks'].setValue('');
  this.corporateForm.controls['Corporatecomment'].setValue('');

    this.msg = response['msg'];
    this.bgcolor = response['bgcolor'];
    this.msgview = true;
  
  });

//  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
 // alert(this.registerForm.get('StartTime').value)

 //this.data.createservice_ind(corporates).subscribe((response) => {
  
 //});



  
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
    addnewiteam : this.IndividualForm.get('addnewiteam').value
  };
 
    console.log(individual);

//  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
 // alert(this.registerForm.get('StartTime').value)

//  this.data.createservice_ind(individual).subscribe((response) => {

//   this.IndividualForm.controls['Insurancetype'].setValue('');
//   this.IndividualForm.controls['Individual_two'].setValue('');
//   this.IndividualForm.controls['Individual_three'].setValue('');
//   this.IndividualForm.controls['Individual_four'].setValue('');
//   this.IndividualForm.controls['Individual_five'].setValue('');
//   this.IndividualForm.controls['Individual_six'].setValue('');
//   this.IndividualForm.controls['Individual_sevan'].setValue('');
//   this.IndividualForm.controls['Individual_eight'].setValue('');
//   this.IndividualForm.controls['Individual_nine'].setValue('');
//   this.IndividualForm.controls['ser_department'].setValue('');
//   this.IndividualForm.controls['ser_assign'].setValue('');
//   this.IndividualForm.controls['ser_comment'].setValue('');
//   this.IndividualForm.controls['Remarks'].setValue('');
  
//   this.msg = response['msg'];
//   this.bgcolor = response['bgcolor'];
//   this.msgview = true;
  
// });

  
 }


 onSubmit() {

  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }


  var  sevices  = {
    officelocation:  this.registerForm.get('officelocation').value,
    smsmobilenumber:  this.registerForm.get('smsmobilenumber').value,
    branch:  this.registerForm.get('branch').value,
    selectaddress : this.registerForm.get('selectaddress').value,
    updatedval:  this.updatedId
   
  };

  //console.log(sevices);

//  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
 // alert(this.registerForm.get('StartTime').value)
   this.data.addnew_services_branch(sevices).subscribe((response) => {
      
          this.registerForm.reset();
          this.msg = response['msg'];
          this.bgcolor = response['bgcolor'];
          this.msgview = true;
   }); 

   
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

 onChangeoffice(deviceValue)
 {
    this.data.branchoffice(deviceValue).subscribe((response) => {
      this.branch$ = response;  
      this.totalview$ = response;
      this.viewofficelocation = false;
      this.viewbranch = true;
      this.viewaddress = false;
     
    });
 }


 onChangeadreess(brancId) 
 {
   this.data.branchaddress(brancId).subscribe((response) => {
     this.branchaddress$ = response;
     this.totalview$ = response;

      this.viewofficelocation = false;
      this.viewbranch = false;
      this.viewaddress = true;
   }); 
 }

 editcalltype(ky,table)
   {

    this.updatedId = ky

    this.iscalltypebutton = false;
    this.iscalltypeupdatebutton = true;


     var edittype  = {
      callid: ky,
      calltable : table,
      };

      this.data.editbranch_service(edittype).subscribe((response) => {

       this.registerForm.controls['smsmobilenumber'].setValue(response['name']);
        //this.registerForm.controls['Description'].setValue(response['description']);
      
      });
  
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
  
  this.data.insurance_phase2(typid).subscribe((response) => {
     this.insphase2$ = response
     this.totalindiv$ = response    
  }); 
 }

 onChangeInsphase2(phaseId)
 {
  this.insphase4$ = Array();  
  this.insphase5$ = Array();  
  this.insphase6$ = Array();  
  this.insphase7$ = Array();  
  this.insphase8$ = Array();  
  this.insphase9$ = Array();  

   this.data.insurance_phase3(phaseId).subscribe((response) => {
     this.insphase3$ = response  
     this.totalindiv$ = response    
  }); 
 }

 onChangeInsphase3(phaseId)
 {
  
  this.insphase5$ = Array();  
  this.insphase6$ = Array();  
  this.insphase7$ = Array();  
  this.insphase8$ = Array();  
  this.insphase9$ = Array();  

   this.data.insurance_phase4(phaseId).subscribe((response) => {
     this.insphase4$ = response 
     this.totalindiv$ = response    
   }); 
 }

 onChangeInsphase4(phaseId)
 {
  
  this.insphase6$ = Array();  
  this.insphase7$ = Array();  
  this.insphase8$ = Array();  
  this.insphase9$ = Array();  

   this.data.insurance_phase5(phaseId).subscribe((response) => {
    this.insphase5$ = response  
    this.totalindiv$ = response  
   }); 
 }

 onChangeInsphase5(phaseId)
 {
  
  this.insphase7$ = Array();  
  this.insphase8$ = Array();  
  this.insphase9$ = Array();  

   this.data.insurance_phase6(phaseId).subscribe((response) => {

    this.insphase6$ = response ;
    this.totalindiv$ = response ;
    
   }); 
 }

 onChangeInsphase6(phaseId)
 {
 
  this.insphase8$ = Array();  
  this.insphase9$ = Array();  

  this.data.insurance_phase7(phaseId).subscribe((response) => {
    this.insphase7$ = response;
    this.totalindiv$ = response ;
  }); 
 }

 onChangeInsphase7(phaseId)
 {
  this.insphase9$ = Array();  

  this.data.insurance_phase8(phaseId).subscribe((response) => {
     this.insphase8$ = response ;
     this.totalindiv$ = response ;

  }); 
 }

 onChangeInsphase8(phaseId)
 {
  this.data.insurance_phase9(phaseId).subscribe((response) => {
       this.insphase9$ = response ;
       this.totalindiv$ = response ;

  }); 
 }

 //corporate

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



 msgclose()
 {
  this.msgview = false;
 }

 cancel_form()
  {
    this.registerForm.reset();
    this.updatedId = 0 ;
    this.iscalltypebutton = true;
    this.iscalltypeupdatebutton = false;
  }

  //onchange

  onFileChange(files: FileList) {

    //console.log(files.item(0));
    this.spinnloder = true; 
    this.fileToUpload = files.item(0); 
    
    let formData = new FormData(); 
    formData.append('file', this.fileToUpload, this.fileToUpload.name); 

    this.data.fileupload(formData).subscribe((response) => {
      this.spinnloder = false; 
      this.msg = response['msg'];
      this.bgcolor = response['bgcolor'];
      this.msgview = true;
      //console.log(response);
    });

    return false; 

//     this.http.post(“Your end-point URL”, ).subscribe((val) => {

//       console.log(val);
// });
  }

  // onFileChange(event) {
  //   let reader = new FileReader();
  //   if(event.target.files && event.target.files.length > 0) {
  //     let file = event.target.files[0];

  //     console.log(file);

  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       this.form.get('avatar').setValue({
  //         filename: file.name,
  //         filetype: file.type,

  //         value: reader.result
  //       })
  //     };
  //   }
  // }

  // onSubmit_file() {
  //   const formModel = this.form.value;
  //   //this.newProperty;
  //   // In a real-world app you'd have a http request / service call here like
  //   // this.http.post('apiUrl', formModel)
  //   setTimeout(() => {
  //     console.log(formModel);
  //     alert('done!');
  //    // this.loading = false;
  //   }, 1000);
  // }

 
}

 
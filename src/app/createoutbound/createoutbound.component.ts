import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-createoutbound',
  templateUrl: './createoutbound.component.html',
  styleUrls: ['./createoutbound.component.css']
})
export class CreateoutboundComponent implements OnInit {

 
  IndividualForm : FormGroup;
  
  form: FormGroup;
  submitted = false;
  ind_submitted = false;
  cop_submitted = false;
  inbound_submitted = false; 
  location$: Object;
  branch$: Object;
  Outbound_classfication$:object;
  Outboundaction$:object;
  insphase2$:object;
  insphase3$:object;
  insphase4$:object;
  insphase5$:object;
  insphase6$:object;
  insphase7$:object;
  insphase17$:object;
  insphase8$:object;
  insphase9$:object;
  inbound1$:object;
  inbound2$:object;
  inbound3$:object;
  Action$: object;
  getoffice_department:object; 
  office_department_user$:object;
  Subclass : string = '';
  effective_status : string = '';
  Instype : string = '';
  Outbound_classfication : string = '';
  outboundcoverquery : string = '';
  outboundcovertype : string = '';
  outbounddirectedto : string = '';
  effective_reason : string = '';
  endreason : string = '';
  Outboundaction : string = '';
  ticketid : string = '';
  ticket : string = '' ;
  customernamenew : string = '' ;
  policynumber : string = '' ;
  createdfromdate : string = '' ;
  createdtodate : string = '' ;
  mobileno : string = '' ;
  policyyear : string = '' ;
  followupdate : string = '';
  noofcall : string = '';
  calldates : string = '';
  callduration : string = '';
  remarks : string = '';
  msg : string = '';
  bgcolor: string = '';
  msgview : boolean = false;
  

  constructor(private route: ActivatedRoute,private formBuilder: FormBuilder,private data: DataService) { 
    this.route.params.subscribe( params => this.ticketid = params.tktId );
  }

  angularForm = new FormGroup ({
    name: new FormControl()
  });


  ngOnInit() {
    
    this.IndividualForm = this.formBuilder.group({

      Subclass: [''],
      effective_status: [''],
      Instype : [''],
      Outbound_classfication : [''],
      outboundcoverquery : [''],
      outboundcovertype : [''],
      outbounddirectedto: [''],
      effective_reason: [''],
      endreason : [''],
      Outboundaction:[''],
      customernamenew:[''],
      mobileno:[''],
      policynumber:[''],
      policyyear:[''],
      followupdate : [''],
      noofcall :[''],
      calldates : [''],
      callduration :[''],
      remarks:['']

    });

  
    this.data.outbound_moredetails().subscribe((response) => { 

      this.insphase7$ = response['subclass'];
      this.insphase17$ = response['effective_status'];
      this.insphase9$ = response['instype'];
      this.insphase2$ = response['classfication'];
      this.insphase3$ = response['coverquery'];
      this.insphase4$ = response['covertype'];
      this.insphase5$ = response['directedto'];
      this.insphase6$ = response['effectivereason'];
      this.insphase8$ = response['endreason'];
      this.Action$ = response['action'];
    });


    this.data.view_outbound_value(this.ticketid).subscribe((response) => {

      this.ticket = response['ticketid'];
      
      this.createdfromdate = response['createdfromdate'];
      this.createdtodate = response['createdtodate'];

      this.IndividualForm.controls['followupdate'].setValue(new Date(response['followupdate']));
      this.IndividualForm.controls['noofcall'].setValue(response['noofcall']);
      this.IndividualForm.controls['calldates'].setValue(new Date(response['calldate']));
      this.IndividualForm.controls['callduration'].setValue(response['callduration']);   
      this.IndividualForm.controls['policyyear'].setValue(response['policyyear']);
      this.IndividualForm.controls['customernamenew'].setValue(response['customername']);
      this.IndividualForm.controls['mobileno'].setValue(response['mobileno']);
      this.IndividualForm.controls['policynumber'].setValue(response['policynumber']);
      this.IndividualForm.controls['Subclass'].setValue(response['outboundsubclass']);
      this.IndividualForm.controls['effective_status'].setValue(response['outboundeffectivestatus']);
      this.IndividualForm.controls['Instype'].setValue(response['outboundinstype']);
      this.IndividualForm.controls['Outbound_classfication'].setValue(response['outboundclassification']);
      this.IndividualForm.controls['outboundcoverquery'].setValue(response['outboundcoverquery']);
      this.IndividualForm.controls['outboundcovertype'].setValue(response['outboundcovertype']);
      this.IndividualForm.controls['outbounddirectedto'].setValue(response['outbounddirectedto']);
      this.IndividualForm.controls['effective_reason'].setValue(response['outboundeffectivereason']);
      this.IndividualForm.controls['endreason'].setValue(response['outboundendreason']);
      this.IndividualForm.controls['Outboundaction'].setValue(response['outboundaction']);
      this.IndividualForm.controls['remarks'].setValue(response['remarks']);

    });


  }


  msgclose()
  {
   console.log('clicked');
   this.msgview = false;
  }
 
  cancel_form()
   {
     
    //this.IndividualForm.reset();
 
   }
 


  onSubmit_individual() {

    this.ind_submitted = true;
  
    // stop here if form is invalid
    if (this.IndividualForm.invalid) {
        return;
    }
  
    var individual  = {

      followupdate:  this.IndividualForm.get('followupdate').value,
      noofcall:  this.IndividualForm.get('noofcall').value,
      Calldate:  this.IndividualForm.get('calldates').value,
      callduration:  this.IndividualForm.get('callduration').value,
      policyyear:  this.IndividualForm.get('policyyear').value,
      customername : this.IndividualForm.get('customernamenew').value,
      mobileno : this.IndividualForm.get('mobileno').value,
      policynumber:  this.IndividualForm.get('policynumber').value,
      outboundsubclass:  this.IndividualForm.get('Subclass').value,
      outboundeffectivestatus: this.IndividualForm.get('effective_status').value,
      outboundinstype:  this.IndividualForm.get('Instype').value,
      outboundclassification:this.IndividualForm.get('Outbound_classfication').value,
      outboundcoverquery:  this.IndividualForm.get('outboundcoverquery').value,
      outboundcovertype:  this.IndividualForm.get('outboundcovertype').value,
      outbounddirectedto:  this.IndividualForm.get('outbounddirectedto').value,
      outboundeffectivereason:  this.IndividualForm.get('effective_reason').value,
      outboundendreason:  this.IndividualForm.get('endreason').value,
      outboundaction:  this.IndividualForm.get('Outboundaction').value,
      remarks : this.IndividualForm.get('remarks').value,
      ticketid:this.ticketid,
     
     
    };
   
    console.log(individual);
  
  //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
   // alert(this.registerForm.get('StartTime').value)
  
   this.data.updateoutboundvalue(individual).subscribe((response) => {
  
    
       this.msg = response['msg'];
       this.bgcolor = response['bgcolor'];
      this.msgview = true;
    
   });
  
    
   }

}

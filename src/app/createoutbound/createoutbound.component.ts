import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, FormBuilder, Validators,FormArray} from '@angular/forms';

@Component({
  selector: 'app-createoutbound',
  templateUrl: './createoutbound.component.html',
  styleUrls: ['./createoutbound.component.css']
})
export class CreateoutboundComponent implements OnInit {

 
  IndividualForm : FormGroup;
  productForm: FormGroup;
  
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
  subclass : string = "";
  effective_status : string = "";
  Instype : string = "";
  Outbound_classfication : string = "";
  outboundcoverquery : string = "";
  outboundcovertype : string = "";
  outbounddirectedto : string = "";
  effective_reason : string = "";
  endreason : string = "";
  Outboundaction : string = "";
  ticketid : string = "";
  ticket : string = "" ;
  customernamenew : string = "" ;
  policynumber : string = "" ;
  createdfromdate : string = "" ;
  createdtodate : string = "" ;
  mobileno : string = "" ;
  policyyear : string = "" ;
  followupdate : string = "";
  noofcall : string = "";
  calldates : string = "";
  callduration : string = "";
  remarks : string = "";
  msg : string = "";
  bgcolor: string = "";
  msgview : boolean = false;
  Coverquery : string = "";
  end_reason : string = "";
  Duration : string = "";
  action : string = ""; 
  noofcalls : string = "";
  followupdates : string ="";
  Remarks : string = "";


  constructor(private route: ActivatedRoute,private formBuilder: FormBuilder,private data: DataService) { 

    this.route.params.subscribe( params => this.ticketid = params.tktId ); 
  }

  angularForm = new FormGroup ({
    name: new FormControl()
  });


  ngOnInit() {

     /* Initiate the form structure */
     this.productForm = this.formBuilder.group({
      //title: [],
       selling_points: this.formBuilder.array([this.formBuilder.group({effective_status:'',Coverquery:'',end_reason:'',effective_reason:'',calldates:'',Duration:'',action:'',noofcalls:'',followupdates:'',Remarks:'',outbounddirectedto:''})])
      //selling_points: this.formBuilder.array([this.formBuilder.group({effective_status:'',Coverquery:'',end_reason:'',effective_reason:'',calldates:'',Duration:'',action:'',noofcalls:'',followupdates:'',Remarks:'',outbounddirectedto:''},{effective_status:'',Coverquery:'',end_reason:'',effective_reason:'',calldates:'',Duration:'',action:'',noofcalls:'',followupdates:'',Remarks:'',outbounddirectedto:''})])

        
    })

    

    //var arr_names = new Array(4);


    
    this.IndividualForm = this.formBuilder.group({

      subclass: [''],
      InsuType: [''],
      CoverType : [''],
      Classification : [''],
      policynumber : [''],
      assuredname : [''],
      customername: [''],
      mobileno: [''],
      policyexpirydate : [''],
      vehiclemake:[''],
      registrationno:[''],
      suminsured:[''],
      noofclaims:[''],
      

    });

  
     this.data.outbound_moredetails().subscribe((response) => { 

    //   this.insphase7$ = response['subclass'];
         this.insphase17$ = response['effective_status'];
    //   this.insphase9$ = response['instype'];
        //  this.insphase2$ = response['classfication'];
        this.insphase3$ = response['coverquery'];
        //  this.insphase4$ = response['covertype'];
          this.insphase5$ = response['directedto'];
         this.insphase6$ = response['effectivereason'];
          this.insphase8$ = response['endreason'];
          this.Action$ = response['action'];
     });


    this.data.view_outbound_value(this.ticketid).subscribe((response) => {

      this.IndividualForm.controls['subclass'].setValue(response['Subclass']);
      this.IndividualForm.controls['policynumber'].setValue(response['policynumber']);
      this.IndividualForm.controls['CoverType'].setValue(response['CoverType']);
      this.IndividualForm.controls['InsuType'].setValue(response['InsuType']);   
      this.IndividualForm.controls['Classification'].setValue(response['Classification']);
      this.IndividualForm.controls['assuredname'].setValue(response['assuredname']);
      this.IndividualForm.controls['customername'].setValue(response['customername']);
      this.IndividualForm.controls['mobileno'].setValue(response['mobileno']);
      this.IndividualForm.controls['policyexpirydate'].setValue(response['policyexpirydate']);
      this.IndividualForm.controls['vehiclemake'].setValue(response['vehiclemake']);
      this.IndividualForm.controls['registrationno'].setValue(response['registrationno']);
      this.IndividualForm.controls['suminsured'].setValue(response['suminsured']);
      this.IndividualForm.controls['noofclaims'].setValue(response['noofclaims']);
      this.IndividualForm.controls['agentname'].setValue(response['agentname']);
      // this.IndividualForm.controls['outbounddirectedto'].setValue(response['outbounddirectedto']);
      // this.IndividualForm.controls['effective_reason'].setValue(response['outboundeffectivereason']);
      // this.IndividualForm.controls['endreason'].setValue(response['outboundendreason']);
      // this.IndividualForm.controls['Outboundaction'].setValue(response['outboundaction']);
      // this.IndividualForm.controls['remarks'].setValue(response['remarks']);

    });


    this.data.allfollowupdetails(this.ticketid).subscribe((response) => {

      console.log(Object.keys(response).length)

      for (var i = 0; i < Object.keys(response).length; i++) {
        //arr_names[i] = i * 2;
        this.sellingPoints.push(this.formBuilder.group({effective_status:response[i].effective_status,Coverquery:response[i].coverquery,end_reason:response[i].end_reason,effective_reason:response[i].effective_reason,calldates:response[i].calldates,Duration:response[i].duration,action:response[i].action,noofcalls:'',followupdates:response[i].followupdates,Remarks:response[i].remarks,outbounddirectedto:response[i].outbounddirectedto}))
     }

    })


  }


  get sellingPoints() {
    return this.productForm.get('selling_points') as FormArray;
  }

  addSellingPoint() {
    this.sellingPoints.push(this.formBuilder.group({effective_status:'',Coverquery:'',end_reason:'',effective_reason:'',calldates:'',Duration:'',action:'',noofcalls:'',followupdates:'',Remarks:'',outbounddirectedto:''}));
  }

  deleteSellingPoint(index) {
    this.sellingPoints.removeAt(index);
  }

  updatetherecords()
  {
    console.log(this.productForm.value.selling_points);

    var allfollowp = { ticket : this.ticketid,
      followup : this.productForm.value.selling_points
    }

    this.data.update_followup(allfollowp).subscribe((response) => {

      this.msg = response['msg'];
      this.bgcolor = response['bgcolor'];
      this.msgview = true;

    });
  }

  msgclose()
  {
   
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

    //   followupdate:  this.IndividualForm.get('followupdate').value,
    //   noofcall:  this.IndividualForm.get('noofcall').value,
    //   Calldate:  this.IndividualForm.get('calldates').value,
    //   callduration:  this.IndividualForm.get('callduration').value,
    //   policyyear:  this.IndividualForm.get('policyyear').value,
    //   customername : this.IndividualForm.get('customernamenew').value,
    //   mobileno : this.IndividualForm.get('mobileno').value,
    //   policynumber:  this.IndividualForm.get('policynumber').value,
    //   outboundsubclass:  this.IndividualForm.get('Subclass').value,
    //   outboundeffectivestatus: this.IndividualForm.get('effective_status').value,
    //   outboundinstype:  this.IndividualForm.get('Instype').value,
    //   outboundclassification:this.IndividualForm.get('Outbound_classfication').value,
    //   outboundcoverquery:  this.IndividualForm.get('outboundcoverquery').value,
    //   outboundcovertype:  this.IndividualForm.get('outboundcovertype').value,
    //   outbounddirectedto:  this.IndividualForm.get('outbounddirectedto').value,
    //   outboundeffectivereason:  this.IndividualForm.get('effective_reason').value,
    //   outboundendreason:  this.IndividualForm.get('endreason').value,
    //   outboundaction:  this.IndividualForm.get('Outboundaction').value,
    //   remarks : this.IndividualForm.get('remarks').value,
    //   ticketid:this.ticketid,
     
     
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


   changestatus(ky)
   {
     //console.log(ky);

     var allfollowp = { 
       ticket : this.ticketid,
       status : ky
    }

    this.data.updateoutboundstatus(allfollowp).subscribe((response) => {

      this.msg = response['msg'];
      this.bgcolor = response['bgcolor'];
      this.msgview = true;

    });

   }

}

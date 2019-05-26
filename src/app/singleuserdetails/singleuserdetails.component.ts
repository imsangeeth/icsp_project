import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-singleuserdetails',
  templateUrl: './singleuserdetails.component.html',
  styleUrls: ['./singleuserdetails.component.css']
})

export class SingleuserdetailsComponent implements OnInit {

  user_det$: Object;
  user$:object;
  comment$:object; 
  auidt$:object;
  call_reason$:object;
  call_type$:object;
  call_note$:object;
  policy_information$:object;
  vehicle$ : object;
  claim_info$ : object;
  inputtype : string;
  selecttype : string;
  selectactive : string = 'non';
 

  taskid;
  selected = 'option2';

  registerForm: FormGroup;
  submitted = false;
  Calltype : string;
  Callreason : string;
  comment :String;
  phn$:string;
  agentname$:string;
  topic$:string;
  ky$:string;

  constructor(private route: ActivatedRoute, private data: DataService,private formBuilder: FormBuilder) {
    this.route.params.subscribe(params => this.agentname$ = params.id);
    this.route.params.subscribe(params => this.phn$ = params.phn);
    this.route.params.subscribe(params => this.topic$ = params.topic);
    this.route.params.subscribe(params => this.ky$ = params.ky);

    this.taskid = this.user$; 
    //this.comment = this.phn$;
   }



   angularForm = new FormGroup ({
    name: new FormControl()
  });

  ngOnInit() {

    var  phnumber  = {
      number: this.phn$,
    };
  
  this.data.getcontactview(phnumber).subscribe(
    data => this.user$ = data 
  );

  this.data.vehicle_info(phnumber).subscribe(
    data => this.vehicle$ = data 
  );

  this.data.claim_info(phnumber).subscribe(
    data => this.claim_info$ = data 
  );

  this.data.call_type().subscribe(
    data => this.call_type$ = data 
  );

  this.data.call_reason().subscribe(
    data => this.call_reason$ = data 
  );

  this.data.viewcall_note(this.phn$).subscribe(
    data => this.call_note$ = data 
  );

  this.data.policy_information(phnumber).subscribe(
    data => this.policy_information$ = data 
  );


  this.registerForm = this.formBuilder.group({
      
    Calltype: ['', Validators.required],
    Callreason: ['', Validators.required],
    comment: ['', Validators.required],
  
    //password: ['', [Validators.required, Validators.minLength(6)]]
});

var  calldetails  = {
   agentname:  this.agentname$,
   topic:  this.topic$, 
   phonenumber: this.phn$,
   key: this.ky$,
};

 this.data.called_user_details(calldetails).subscribe((response) => {
 
 });

  }

  get f() { return this.registerForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    var  contact  = {
      Calltype:  this.registerForm.get('Calltype').value,
      Callreason:  this.registerForm.get('Callreason').value,
      Comment:  this.registerForm.get('comment').value, 
      phonenumber: this.phn$,
      key: this.ky$
    };

    console.log(contact);

    this.data.addcallcallnote(contact).subscribe((response) => {
      this.registerForm.reset();

      this.data.viewcall_note(this.phn$).subscribe(
        data => this.call_note$ = data 
      );
    
    });

  
   }


  onsearchoracle()
  {
    console.log(this.selectactive)
    console.log(this.selecttype)

    if(this.selecttype == 'phone' && this.selectactive == 'non')
    {
         
      var pos = {
        key : this.inputtype
      }

      this.data.getsearchphone(pos).subscribe((response) => {

        //console.log(response);
        this.user$ = response;
        this.vehicle$ = response.iteam;
        this.claim_info$ = response.iteam;
        this.policy_information$ = response.iteam;  
      });
  
    }
    
    else if(this.selecttype == 'policy' && this.selectactive == 'non')
    {

      var pos = {
        key : this.inputtype
      }
      this.data.getsearchpolicy(pos).subscribe((response) => {

        //console.log(response);
        this.user$ = response;
        this.vehicle$ = response.iteam;
        this.claim_info$ = response.iteam;
        this.policy_information$ = response.iteam;  
      });

    }
    
    else if(this.selecttype == 'chassis' && this.selectactive == 'non'){

      var pos = {
        key : this.inputtype
      }

      this.data.getsearchchassis(pos).subscribe((response) => {

        //console.log(response);
        this.user$ = response;
        this.vehicle$ = response.iteam;
        this.claim_info$ = response.iteam;
        this.policy_information$ = response.iteam;  
      });

    }

    else if(this.selecttype == 'Claim' && this.selectactive == 'non'){

      var pos = {
        key : this.inputtype
      }

      this.data.getsearchClaim(pos).subscribe((response) => {

        //console.log(response);
        this.user$ = response;
        this.vehicle$ = response.iteam;
        this.claim_info$ = response.iteam;
        this.policy_information$ = response.iteam;  
      });

    }
    else if(this.selecttype == 'TCNumber' && this.selectactive == 'non'){

      var pos = {
        key : this.inputtype
      }

      this.data.getsearchTCNumber(pos).subscribe((response) => {

        //console.log(response);
        this.user$ = response;
        this.vehicle$ = response.iteam;
        this.claim_info$ = response.iteam;
        this.policy_information$ = response.iteam;  
      });

    }
    else if(this.selecttype == 'policy' && this.selectactive == 'active')
    {

      var pos = {
        key : this.inputtype
      }
      this.data.getsearchpolicyactive(pos).subscribe((response) => {

        //console.log(response);
        this.user$ = response;
        this.vehicle$ = response.iteam;
        this.claim_info$ = response.iteam;
        this.policy_information$ = response.iteam;  
      });

    }
    else if(this.selecttype == 'Claim' && this.selectactive == 'active')
    {

      var pos = {
        key : this.inputtype
      }
      this.data.getsearchClaimactive(pos).subscribe((response) => {

        //console.log(response);
        this.user$ = response;
        this.vehicle$ = response.iteam;
        this.claim_info$ = response.iteam;
        this.policy_information$ = response.iteam;  
      });

    }
    else if(this.selecttype == 'TCNumber' && this.selectactive == 'active')
    {

      var pos = {
        key : this.inputtype
      }
      this.data.getsearchTCNumberactive(pos).subscribe((response) => {

        //console.log(response);
        this.user$ = response;
        this.vehicle$ = response.iteam;
        this.claim_info$ = response.iteam;
        this.policy_information$ = response.iteam;  
      });

    }
    else if(this.selecttype == 'chassis' && this.selectactive == 'active'){

      var pos = {
        key : this.inputtype
      }

      this.data.getsearchchassisactive(pos).subscribe((response) => {

        //console.log(response);
        this.user$ = response;
        this.vehicle$ = response.iteam;
        this.claim_info$ = response.iteam;
        this.policy_information$ = response.iteam;  
      });

    }

    else if(this.selecttype == 'phone' && this.selectactive == 'active'){

      var pos = {
        key : this.inputtype
      }

      this.data.getsearchphoneactive(pos).subscribe((response) => {

        //console.log(response);
        this.user$ = response;
        this.vehicle$ = response.iteam;
        this.claim_info$ = response.iteam;
        this.policy_information$ = response.iteam;  
      });

    }
    
    
    


  }

}

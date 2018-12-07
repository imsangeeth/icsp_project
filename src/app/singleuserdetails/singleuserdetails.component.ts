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

  constructor(private route: ActivatedRoute, private data: DataService,private formBuilder: FormBuilder) {
    this.route.params.subscribe(params => this.agentname$ = params.agentname);
    this.route.params.subscribe(params => this.phn$ = params.phn);
    this.route.params.subscribe(params => this.topic$ = params.topic);

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
   phonenumber: this.phn$
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
      phonenumber: this.phn$
    };

    console.log(contact);

    this.data.addcallcallnote(contact).subscribe((response) => {
      this.registerForm.reset();
    });

  
   }

}

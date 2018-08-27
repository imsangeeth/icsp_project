import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-updatecontactview',
  templateUrl: './updatecontactview.component.html',
  styleUrls: ['./updatecontactview.component.css']
})
export class UpdatecontactviewComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  firstName: string = '';
  startDate: string = '';
  destinationNumber: string = '';
  Dialer: string = '';
  Prio: string = '';
  StartTime: string = '';
  StartDateval:string = '';
  StopTime: string = '';
  StopDate: string = '';
  CallTag: string = '';
  CallTagtrack: string = '';
  msg: string = '';
  msgview = false;
  bgcolor: string = '' ;
  contactId ;
  date = new FormControl(new Date());


  user$: Object;

  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe( params => this.user$ = params.id  );
    this.contactId = this.user$;
   }

   angularForm = new FormGroup ({
    name: new FormControl()
   });

   

  ngOnInit() {

  

    this.registerForm = this.formBuilder.group({
      destinationNumber: ['', Validators.required],
      Dialer: ['', Validators.required],
      Prio: ['', Validators.required],
      StartTime: ['', Validators.required],
      StartDateval: ['', Validators.required],
      StopTime: ['', Validators.required],
      StopDate: ['', Validators.required],
      CallTag: ['', Validators.required],
      CallTagtrack: ['', Validators.required],
       //email: ['', [Validators.required, Validators.email]],
      //password: ['', [Validators.required, Validators.minLength(6)]]

      
  });

  

  this.data.geteditcontact(this.user$).subscribe((response) => {

    this.registerForm.controls['destinationNumber'].setValue(response['DestinatioNumber']);
    this.registerForm.controls['Dialer'].setValue(response['dialer']);
    this.registerForm.controls['StartTime'].setValue(response['StartTime']);
    this.registerForm.controls['StartDateval'].setValue(new Date(response['StartDate']));
    this.registerForm.controls['StopTime'].setValue(response['StopTime']);
    this.registerForm.controls['StopDate'].setValue(new Date(response['StopDate']));
    this.registerForm.controls['Prio'].setValue(response['Prio']);
    this.registerForm.controls['CallTag'].setValue(response['CallTag_name']);
    this.registerForm.controls['CallTagtrack'].setValue(response['CallTagTrackid']);

  });

    this.data.geteditcontact(this.user$).subscribe(
      data => this.user$ = data 
    );
    
   // console.log(this.data.);

   
    
  }



  get f() { return this.registerForm.controls; }

 

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    
  
    var  contact  = {

      destinationNumbVal:  this.registerForm.get('destinationNumber').value,
      DialerVal:  this.registerForm.get('Dialer').value,
      PrioVal:  this.registerForm.get('Prio').value,
      StartTimeVal:  this.registerForm.get('StartTime').value,
      StartDtval: this.registerForm.get('StartDateval').value,
      StopTimeVal:  this.registerForm.get('StopTime').value,
      StopDateVal:  this.registerForm.get('StopDate').value,
      CallTagVal:  this.registerForm.get('CallTag').value,
      CallTagtrackVal:  this.registerForm.get('CallTagtrack').value,
      contactIdval : this.contactId,
      
    };

  //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
   // alert(this.registerForm.get('StartTime').value)
    this.data.getupdatecontact(contact).subscribe((response) => {
       if(response['error'] = false)
       {
          
       }
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
  {this.registerForm.reset();

  }

}

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
  bgcolor: string = '' 
  date = new FormControl(new Date());


  user$: Object;

  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe( params => this.user$ = params.id );

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
    this.registerForm.controls['StartDateval'].setValue(response['StartDate']);
    this.registerForm.controls['StopTime'].setValue(response['StopTime']);
    this.registerForm.controls['StopDate'].setValue(response['StopDate']);
    this.registerForm.controls['Prio'].setValue(response['Prio']);
    this.registerForm.controls['CallTag'].setValue(response['CallTag_name']);
    this.registerForm.controls['CallTagtrack'].setValue(response['CallTagTrackid']);

  });

    this.data.geteditcontact(this.user$).subscribe(
      data => this.user$ = data 
    );
    
   // console.log(this.data.);
    
  }

}

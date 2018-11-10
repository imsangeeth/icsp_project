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

  user$: Object;
  comment$:object; 
  auidt$:object;
  taskid;
  selected = 'option2';

  registerForm: FormGroup;
  submitted = false;
  Calltype : string
  Callreason : string
  comment :String



  constructor(private route: ActivatedRoute, private data: DataService,private formBuilder: FormBuilder) {
    this.route.params.subscribe( params => this.user$ = params.id );
    this.taskid = this.user$; 
   }

   angularForm = new FormGroup ({
    name: new FormControl()
  });

  ngOnInit() {
  
  this.data.getcontactview(this.user$).subscribe(
    data => this.user$ = data 
  );

  this.registerForm = this.formBuilder.group({
      
    Calltype: ['', Validators.required],
    Callreason: ['', Validators.required],
    comment: ['', Validators.required],
  
    //password: ['', [Validators.required, Validators.minLength(6)]]
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
    };

    console.log(contact);
   }

}

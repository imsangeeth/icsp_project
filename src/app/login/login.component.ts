import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Loginform: FormGroup;
  submitted = false;
  username: string = '';
  password: string = '';

  constructor(private formBuilder: FormBuilder,private data: DataService) { }

  angularForm = new FormGroup ({
    name: new FormControl()
  });

  ngOnInit() {
   
    this.Loginform = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
       //email: ['', [Validators.required, Validators.email]],
      //password: ['', [Validators.required, Validators.minLength(6)]]
  });

  }


  get f() { return this.Loginform.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.Loginform.invalid) {
        return;
    }

    var  contact  = {
      UsernameVal:  this.Loginform.get('username').value,
      Password:  this.Loginform.get('password').value,

    };

    console.log(contact);

  //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
   // alert(this.registerForm.get('StartTime').value)
    this.data.postcontact(contact).subscribe((response) => {
       
     });


   }





}

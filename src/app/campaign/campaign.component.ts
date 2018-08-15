import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  registerForm: FormGroup;
    submitted = false;
    Campaignname: string = '';
    Mode: string = '';
    Scheduletime: string = '';
    Campaigndate: string = '';
    Scheduledate: string = '';
    serviceprovider: string = '';
    Campaigndes:string = '';
    msg: string = '';
    msgview = false;
    bgcolor: string = ''
    

  constructor(private formBuilder: FormBuilder,private data: DataService) { }

  angularForm = new FormGroup ({
    name: new FormControl()
  });

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Campaignname: ['', Validators.required],
      Mode: ['', Validators.required],
      Scheduletime: ['', Validators.required],
      Campaigndate: ['', Validators.required],
      Scheduledate: ['', Validators.required],
      serviceprovider: ['', Validators.required],
      Campaigndes: ['', Validators.required],
       //email: ['', [Validators.required, Validators.email]],
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
      Campaignname:  this.registerForm.get('Campaignname').value,
      Mode:  this.registerForm.get('Mode').value,
      Scheduletime:  this.registerForm.get('Scheduletime').value,
      Campaigndate:  this.registerForm.get('Campaigndate').value,
      Scheduledate: this.registerForm.get('Scheduledate').value,
      serviceprovider:  this.registerForm.get('serviceprovider').value,
      Campaigndes:  this.registerForm.get('Campaigndes').value,
    };

  //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
   // alert(this.registerForm.get('StartTime').value)
    this.data.postcampaign(contact).subscribe((response) => {
       this.registerForm.reset();
       this.msg = response['msg'];
       this.bgcolor = response['bgcolor'];
       this.msgview = true;
     });
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

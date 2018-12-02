import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-singleserviceview',
  templateUrl: './singleserviceview.component.html',
  styleUrls: ['./singleserviceview.component.css']
})
export class SingleserviceviewComponent implements OnInit {

  user$: Object;
  comment$:object;
  auidt$:object;
  responseobjec:object;
  Commentform: FormGroup;
  submitted = false;
  comment: string = '';
  msg:string = '';
  bgcolor:string ='';
  assign:string;
  department:string
  btnstyle:string
  ticketstatus:string
  name:string
  phonenumber:string
  policynumber:string
  reason:string
  Received:string
  duesate:string
  subject:string
  Description:string
  msgview = false;
  isLinear = false;
  taskid;

  constructor(private route: ActivatedRoute, private data: DataService,private formBuilder: FormBuilder) { 
    this.route.params.subscribe( params => this.user$ = params.id );
    this.taskid = this.user$;
 }

 angularForm = new FormGroup ({
  name: new FormControl()
  });

    ngOnInit() {
      
      this.data.gettaskcomments(this.user$).subscribe(
        data => this.comment$ = data
      );
      
      this.data.getauditdeatils(this.user$).subscribe(
        data => this.auidt$ = data
      );
      

    this.data.getservicesdview(this.user$).subscribe(
      data => this.user$ = data 
    );

    this.Commentform = this.formBuilder.group({
      comment: ['', Validators.required],
    });
   }

   onSubmit() {
    this.submitted = true;

    if (this.Commentform.invalid) {
      return;
   }
  
    var  contact  = {
      comment:  this.Commentform.get('comment').value,
      tskid: this.taskid
    };

    this.data.posttservicescomment(contact).subscribe((response) => {
      this.responseobjec = response;
      this.Commentform.controls['comment'].setValue('');
      this.comment$ = Object.assign(response,this.comment$); 

       console.log(response);
       console.log(this.comment$);
       
     });
   }




}

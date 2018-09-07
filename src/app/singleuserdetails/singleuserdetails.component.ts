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

  constructor(private route: ActivatedRoute, private data: DataService,private formBuilder: FormBuilder) {
    this.route.params.subscribe( params => this.user$ = params.id );
    this.taskid = this.user$; 
   }

  ngOnInit() {
  
  this.data.getcontactview(this.user$).subscribe(
    data => this.user$ = data 
  );
  }

}

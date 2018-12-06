import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-ktview',
  templateUrl: './ktview.component.html',
  styleUrls: ['./ktview.component.css']
})
export class KtviewComponent implements OnInit {

 user$:string;
 ktdetails$:object;

  constructor(private route: ActivatedRoute, private data: DataService,private formBuilder: FormBuilder) { 
    this.route.params.subscribe( params => this.user$ = params.id );
 }

  ngOnInit() {

    this.data.singleknowledge(this.user$).subscribe(
      data => this.ktdetails$ = data
    );
    console.log(this.user$);
  }

}

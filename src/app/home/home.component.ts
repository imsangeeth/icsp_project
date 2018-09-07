import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message = "Loading..."

  constructor(private data: DataService) { }

  ngOnInit() {

    
    
  }

}

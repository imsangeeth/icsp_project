import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message = "Loading..."

  constructor(private data: DataService) { }

  ngOnInit() {

    this.data.homedata().subscribe(data => {
      this.message = data.message
    })
    
  }

}

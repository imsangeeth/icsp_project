import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { chart } from 'chart.js';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message = "Loading..."
  topiccount : object; 
  callpercetage : object;
  linecharts = [];

  constructor(private newdata: DataService) { }
  
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Call Reason'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65], label: 'Complaints'},
    {data: [28], label: 'Underwriting'},
    {data: [0], label: 'Enquiry'},
    {data: [0], label: 'Sales'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }


  ngOnInit() {

    this.newdata.call_reason_avg().subscribe(
      newdata => this.callpercetage = newdata 
    );
 
    this.newdata.call_reason_avg_grap().subscribe((response) => {

      let data = [response['Complaints']];
      let data1 = [response['Underwriting']];
      let data2 = [response['Enquiry']];
      let data3 = [response['Sales']];

      let clone = JSON.parse(JSON.stringify(this.barChartData));

      clone[0].data = data;
      clone[1].data = data1;
      clone[2].data = data2;
      clone[3].data = data3;
 
      this.barChartData = clone;

    });

    
  }

}

import { Component, OnInit } from '@angular/core';
import {ExcelService} from '../excel.service';
import { DataService } from '../data.service';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  ReportForm:FormGroup;
  fromdate:string;
  todate:string;
  location$ :any;
  report$ : any;
 
  constructor(private excelService:ExcelService,private data: DataService,private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.ReportForm = this.formBuilder.group({
      fromdate : [''],
      todate : [''],
    });


    this.data.getofficelocation().subscribe(
      data => this.location$ = data  
    );

    
  }

  reportsubmit()
  {
    var reportdate  = {
      fromdate:  this.ReportForm.get('fromdate').value,
      todate:  this.ReportForm.get('todate').value,
      };

    
    this.data.genrate_ticket(reportdate).subscribe((response) => {
      this.report$ = response;
    });


  }

  cancel_form()
  {
    this.ReportForm.reset();
  }

  exportAsXLSX():void {
     this.excelService.exportAsExcelFile(this.report$, 'sample');
  }

}

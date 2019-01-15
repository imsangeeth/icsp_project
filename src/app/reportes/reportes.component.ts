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
  type:string;
  location$ :any;
  report$ : any;
  isreportview: boolean = false;
  isreportviewinbound : boolean = false;
  isreportviewindidual : boolean = false;
  isreportviewcorporate : boolean = false;
  isreportviewbranch : boolean = false;

  constructor(private excelService:ExcelService,private data: DataService,private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.ReportForm = this.formBuilder.group({
      fromdate : ['',Validators.required],
      todate : ['',Validators.required],
      type : ['',Validators.required]
    });


    this.data.getofficelocation().subscribe(
      data => this.location$ = data  
    );

    
  }

  reportsubmit()
  { 
    this.isreportview = true;
    var reportdate  = {
      fromdate:  this.ReportForm.get('fromdate').value,
      todate:  this.ReportForm.get('todate').value,
      type:  this.ReportForm.get('type').value,
      };


    
    this.data.genrate_ticket(reportdate).subscribe((response) => {


      if(response.type == 'corporate')
      {
        this.isreportviewcorporate = true;
        this.isreportviewindidual = false;
        this.isreportviewinbound = false;
        this.isreportviewbranch = false;
      }
      else if(response.type == 'Individual')
      {
        this.isreportviewindidual = true;
        this.isreportviewcorporate = false;
        this.isreportviewinbound = false;
        this.isreportviewbranch = false;
      }
      else if(response.type == 'inbound')
      {
        this.isreportviewinbound = true;
        this.isreportviewcorporate = false;
        this.isreportviewindidual = false;
        this.isreportviewbranch = false;
      }
      else if(response.type == 'branch')
      {
        this.isreportviewinbound = false;
        this.isreportviewcorporate = false;
        this.isreportviewindidual = false;
        this.isreportviewbranch = true;
      }

      this.report$ = response.item;

    });


  }

  cancel_form()
  {
    this.ReportForm.reset();
  }

  exportAsXLSX():void {
     this.excelService.exportAsExcelFile(this.report$, 'Afnic');
  }

}

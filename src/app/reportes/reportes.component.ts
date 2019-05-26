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
  isreportoutbound : boolean = false;
  getoffice_department:object;
  office_department_user$:object;
  branch_department : string ='';
  branch_assign : string = '';
  Ticketstatus : string = '';

  constructor(private excelService:ExcelService,private data: DataService,private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.ReportForm = this.formBuilder.group({
      fromdate : ['',Validators.required],
      todate : ['',Validators.required],
      type : ['',Validators.required],
      branch_department : [''],
      branch_assign : [''],
      Ticketstatus : ['']

    });


    this.data.getofficelocation().subscribe(
      data => this.location$ = data  
    );

    this.data.getoffice_department().subscribe(
      data => this.getoffice_department = data  
    );

    
  }

  reportsubmit()
  { 
    this.isreportview = true;
    var reportdate  = {
      fromdate:  this.ReportForm.get('fromdate').value,
      todate:  this.ReportForm.get('todate').value,
      type:  this.ReportForm.get('type').value,
      Ticketstatus:  this.ReportForm.get('Ticketstatus').value,
      branch_department:  this.ReportForm.get('branch_department').value,
      branch_assign:  this.ReportForm.get('branch_assign').value,
      
      };
 
    this.data.genrate_ticket(reportdate).subscribe((response) => {

      if(response.type == 'corporate')
      {
        this.isreportviewcorporate = true;
        this.isreportviewindidual = false;
        this.isreportviewinbound = false;
        this.isreportviewbranch = false;
        this.isreportoutbound = false;
      }
      else if(response.type == 'Individual')
      {
        this.isreportviewindidual = true;
        this.isreportviewcorporate = false;
        this.isreportviewinbound = false;
        this.isreportviewbranch = false;
        this.isreportoutbound = false;
      }
      else if(response.type == 'inbound')
      {
        this.isreportviewinbound = true;
        this.isreportviewcorporate = false;
        this.isreportviewindidual = false;
        this.isreportviewbranch = false;
        this.isreportoutbound = false;
      }
      else if(response.type == 'branch')
      {
        this.isreportviewinbound = false;
        this.isreportviewcorporate = false;
        this.isreportviewindidual = false;
        this.isreportviewbranch = true;
        this.isreportoutbound = false;
      }
      else if(response.type == 'Outbound'){

        this.isreportviewinbound = false;
        this.isreportviewcorporate = false;
        this.isreportviewindidual = false;
        this.isreportviewbranch = false;
        this.isreportoutbound = true;
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

  onChangedepartment(depID)
  {
   this.data.office_department_user(depID).subscribe(
     data => this.office_department_user$ = data  
    ); 
  }

}

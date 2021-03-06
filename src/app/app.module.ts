import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatNativeDateModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {AuthGuard} from './auth.guard';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { ChartsModule } from 'ng2-charts';


//import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreatecustomerComponent } from './createcustomer/createcustomer.component';
import { HomeComponent } from './home/home.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { DataTableComponent } from './data-table/data-table.component';
import { UsertableComponent } from './components/usertable/usertable.component';
import { DataService } from './data.service';
import {ExcelService} from './excel.service';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';
import { CreateserviceComponent } from './createservice/createservice.component';
import { ViewserviceComponent } from './viewservice/viewservice.component';
import { CampaignComponent } from './campaign/campaign.component';
import { CampaignviewComponent } from './campaignview/campaignview.component';
import { UpdatecontactviewComponent } from './updatecontactview/updatecontactview.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { SingleserviceviewComponent } from './singleserviceview/singleserviceview.component';
import {MatCardModule} from '@angular/material/card';
import { EditservicesComponent } from './editservices/editservices.component';
import { SingleuserdetailsComponent } from './singleuserdetails/singleuserdetails.component';
import { SurveyComponent } from './survey/survey.component';
import { KtviewComponent } from './ktview/ktview.component';
import { MasterpageComponent } from './masterpage/masterpage.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ReportesComponent } from './reportes/reportes.component';
import { MasterassignComponent } from './masterassign/masterassign.component';
import { MasterserviceComponent } from './masterservice/masterservice.component';
import { MasterktComponent } from './masterkt/masterkt.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { CreateoutboundComponent } from './createoutbound/createoutbound.component';
import { ViewoutboundcallComponent } from './viewoutboundcall/viewoutboundcall.component';
import { SingleoutboundComponent } from './singleoutbound/singleoutbound.component';
import { CreateagentComponent } from './createagent/createagent.component';
import { MasterticketComponent } from './masterticket/masterticket.component';
import { OutboundComponent } from './outbound/outbound.component';
import { ReportoutboundComponent } from './reportoutbound/reportoutbound.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreatecustomerComponent,
    HomeComponent,
    ViewcustomerComponent,
    ContactComponent,
    DataTableComponent,
    UsertableComponent,
    ViewcontactComponent,
    CreateserviceComponent,
    ViewserviceComponent,
    CampaignComponent,
    CampaignviewComponent,
    UpdatecontactviewComponent,
    LoginComponent,
    AdminComponent,
    SingleserviceviewComponent,
    EditservicesComponent,
    SingleuserdetailsComponent,
    SurveyComponent,
    KtviewComponent,
    MasterpageComponent,
    ReportesComponent,
    MasterassignComponent,
    MasterserviceComponent,
    MasterktComponent,
    CreateoutboundComponent,
    ViewoutboundcallComponent,
    SingleoutboundComponent,
    CreateagentComponent,
    MasterticketComponent,
    OutboundComponent,
    ReportoutboundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTabsModule,
    MatStepperModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatExpansionModule,
    ChartsModule,
    AngularFileUploaderModule
   
    //MatPaginator,
   // MatSort,
   // MatTableDataSource
    
  ],
  providers: [DataService,AuthGuard,ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }

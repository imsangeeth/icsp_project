import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreatecustomerComponent } from './createcustomer/createcustomer.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';
import { ContactComponent } from './contact/contact.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';
import { CreateserviceComponent } from './createservice/createservice.component';
import { ViewserviceComponent } from './viewservice/viewservice.component';
import { CampaignComponent } from './campaign/campaign.component';
import { CampaignviewComponent } from './campaignview/campaignview.component';
import { UpdatecontactviewComponent } from './updatecontactview/updatecontactview.component';
import { LoginComponent } from './login/login.component';
import { SingleserviceviewComponent } from './singleserviceview/singleserviceview.component';
import {AuthGuard} from './auth.guard';
import { EditservicesComponent } from './editservices/editservices.component';
import { SingleuserdetailsComponent } from './singleuserdetails/singleuserdetails.component';
import { MasterpageComponent } from './masterpage/masterpage.component';
import { KtviewComponent } from './ktview/ktview.component';
import { ReportesComponent } from './reportes/reportes.component';
import { MasterassignComponent } from './masterassign/masterassign.component';
import { MasterserviceComponent } from './masterservice/masterservice.component';
import { MasterktComponent } from './masterkt/masterkt.component';
import { CreateoutboundComponent } from './createoutbound/createoutbound.component';
import { ViewoutboundcallComponent } from './viewoutboundcall/viewoutboundcall.component';
import { CreateagentComponent } from './createagent/createagent.component';
import { MasterticketComponent } from './masterticket/masterticket.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    //canActivate:[AuthGuard]
  },
  {
    path: 'Createcustomer',
    component: CreatecustomerComponent,
      //canActivate:[AuthGuard]
  },
  {
    path: 'viewcustomer',
    component: ViewcustomerComponent,
      //canActivate:[AuthGuard]
  },
  {
    path: 'createcontact',
    component: ContactComponent,
      //canActivate:[AuthGuard]
  },
  {
    path: 'knowledge',
    component: ViewcontactComponent,
      //canActivate:[AuthGuard]
  },
  {
    path: 'createservice',
    component: CreateserviceComponent,
     //canActivate:[AuthGuard]
  },
  {
    path: 'createservice/:phn/:key',
    component: CreateserviceComponent,
     //canActivate:[AuthGuard]
  },
  {
    path: 'viewservices',
    component: ViewserviceComponent,
    //canActivate:[AuthGuard]
  },
  {
    path: 'createcampaign',
    component: CampaignComponent,
     //canActivate:[AuthGuard]
  },
  {
    path: 'viewcampaign',
    component: CampaignviewComponent,
     //canActivate:[AuthGuard]
  },
  {
    path: 'updatecontacts/:id',
    component: UpdatecontactviewComponent,
    //canActivate:[AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
     //canActivate:[AuthGuard]
    
  },
  {
    path: 'singletask/:id',
    component: SingleserviceviewComponent,
     //canActivate:[AuthGuard]

  },
  {
    path: 'singleuserview/:id',
    component: SingleuserdetailsComponent,
     //canActivate:[AuthGuard]
  },
  {
    path: 'singleuserview/:id/:phn/:topic/:ky',
    component: SingleuserdetailsComponent,
    //canActivate:[AuthGuard]
  },
  {
    path: 'editservice/:id/:type',
    component: EditservicesComponent,
    //canActivate:[AuthGuard]
  },
  {
    path: 'masterpage',
    component: MasterpageComponent,
     //canActivate:[AuthGuard]
  },
  {
    path: 'ktview/:id',
    component: KtviewComponent,
    //canActivate:[AuthGuard]
  },
  {
    path: 'report',
    component: ReportesComponent,
    //canActivate:[AuthGuard]
  },
  {
    path: 'masterassign',
    component: MasterassignComponent,
    //canActivate:[AuthGuard]
  },
  {
    path: 'masterservice',
    component: MasterserviceComponent,
    //canActivate:[AuthGuard]
  },
  {
    path: 'masterkt',
    component: MasterktComponent,
    //canActivate:[AuthGuard]
  },
  {
    path: 'updateoutbound/:tktId',
    component: CreateoutboundComponent,
    //canActivate:[AuthGuard]
  },
  {
    path: 'viewoutbound',
    component: ViewoutboundcallComponent,
  },
  {
    path: 'newagent',
    component : CreateagentComponent
  },
  {
    path:"masterservices",
    component :MasterticketComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

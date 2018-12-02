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

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    //canActivate:[AuthGuard]
  },
  {
    path: 'Createcustomer',
    component: CreatecustomerComponent,
   // canActivate:[AuthGuard]
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
    path: 'viewcontact',
    component: ViewcontactComponent,
    // canActivate:[AuthGuard]
  },
  {
    path: 'createservice',
    component: CreateserviceComponent,
    //canActivate:[AuthGuard]
  },
  {
    path: 'createservice/:phn',
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
    // canActivate:[AuthGuard]
  },
  {
    path: 'updatecontacts/:id',
    component: UpdatecontactviewComponent,
    // canActivate:[AuthGuard]
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
    // canActivate:[AuthGuard]

  },
  {
    path: 'singleuserview/:id',
    component: SingleuserdetailsComponent,
    //canActivate:[AuthGuard]
  },
  {
    path: 'singleuserview/:id/:phn',
    component: SingleuserdetailsComponent,
    //canActivate:[AuthGuard]
  },
  {
    path: 'editservice/:id',
    component: EditservicesComponent,
    //canActivate:[AuthGuard]
  },
  {
    path: 'masterpage',
    component: MasterpageComponent,
    //canActivate:[AuthGuard]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

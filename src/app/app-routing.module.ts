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
import { UpdatecontactviewComponent } from './updatecontactview/updatecontactview.component'



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Createcustomer',
    component: CreatecustomerComponent
  },
  {
    path: 'viewcustomer',
    component: ViewcustomerComponent
  },
  {
    path: 'createcontact',
    component: ContactComponent
  },
  {
    path: 'viewcontact',
    component: ViewcontactComponent
  },
  {
    path: 'createservice',
    component: CreateserviceComponent
  },
  {
    path: 'viewservices',
    component: ViewserviceComponent
  },
  {
    path: 'createcampaign',
    component: CampaignComponent
  },
  {
    path: 'viewcampaign',
    component: CampaignviewComponent
  },
  {
    path: 'updatecontacts/:id',
    component: UpdatecontactviewComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreatecustomerComponent } from './createcustomer/createcustomer.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';
import { ContactComponent } from './contact/contact.component';
import { DataTableComponent } from './data-table/data-table.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component'


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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

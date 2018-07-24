import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreatecustomerComponent } from './createcustomer/createcustomer.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';


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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from "../app/contact/contact.component";
import { NewsComponent } from "../app/news/news.component";
import { ShowEmployeesComponent } from "../app/show-employees/show-employees.component";
import { HomeComponent } from "../app/home/home.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'show-employees',
    component: ShowEmployeesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

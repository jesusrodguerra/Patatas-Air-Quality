import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCityComponent } from './list/list-city/list-city.component';
import { ResumeCityComponent } from './resume/resume-city/resume-city.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ListCityComponent
  },
  {
    path: 'resume',
    component: ResumeCityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }

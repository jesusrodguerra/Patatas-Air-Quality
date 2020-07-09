import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ResumeCityComponent } from './resume/resume-city/resume-city.component';
import { ListCityComponent } from './list/list-city/list-city.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [ResumeCityComponent, ListCityComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MaterialModule
  ]
})
export class ComponentsModule { }

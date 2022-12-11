import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormDynamicRoutingModule } from './form-dynamic-routing.module';
import { FormDynamicComponent } from './form-dynamic.component';


@NgModule({
  declarations: [
    FormDynamicComponent
  ],
  imports: [
    CommonModule,
    FormDynamicRoutingModule
  ]
})
export class FormDynamicModule { }

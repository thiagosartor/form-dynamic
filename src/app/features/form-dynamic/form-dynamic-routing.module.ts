import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDynamicComponent } from './form-dynamic.component';

const routes: Routes = [
  {
    path: '',
    component: FormDynamicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormDynamicRoutingModule { }

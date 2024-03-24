import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StepOneRegisterPage } from './step-one-register.page';

const routes: Routes = [
  {
    path: '',
    component: StepOneRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StepOneRegisterPageRoutingModule {}

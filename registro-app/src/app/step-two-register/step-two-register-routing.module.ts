import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StepTwoRegisterPage } from './step-two-register.page';

const routes: Routes = [
  {
    path: '',
    component: StepTwoRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StepTwoRegisterPageRoutingModule {}

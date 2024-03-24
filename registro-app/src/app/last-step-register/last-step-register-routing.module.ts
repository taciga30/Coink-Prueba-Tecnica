import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LastStepRegisterPage } from './last-step-register.page';

const routes: Routes = [
  {
    path: '',
    component: LastStepRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LastStepRegisterPageRoutingModule {}

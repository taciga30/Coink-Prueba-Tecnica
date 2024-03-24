import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LastStepRegisterPageRoutingModule } from './last-step-register-routing.module';

import { LastStepRegisterPage } from './last-step-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LastStepRegisterPageRoutingModule
  ],
  declarations: [LastStepRegisterPage]
})
export class LastStepRegisterPageModule {}

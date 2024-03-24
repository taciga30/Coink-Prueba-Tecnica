import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StepTwoRegisterPageRoutingModule } from './step-two-register-routing.module';

import { StepTwoRegisterPage } from './step-two-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StepTwoRegisterPageRoutingModule
  ],
  declarations: [StepTwoRegisterPage]
})
export class StepTwoRegisterPageModule {}

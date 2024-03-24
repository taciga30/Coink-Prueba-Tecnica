import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StepOneRegisterPageRoutingModule } from './step-one-register-routing.module';

import { StepOneRegisterPage } from './step-one-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StepOneRegisterPageRoutingModule
  ],
  declarations: [StepOneRegisterPage]
})
export class StepOneRegisterPageModule {}

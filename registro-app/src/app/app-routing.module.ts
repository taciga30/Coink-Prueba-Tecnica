import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'user-register',
    loadChildren: () => import('./user-register/user-register.module').then( m => m.UserRegisterPageModule)
  },
  {
    path: 'step-one-register',
    loadChildren: () => import('./step-one-register/step-one-register.module').then( m => m.StepOneRegisterPageModule)
  },
  {
    path: 'step-two-register',
    loadChildren: () => import('./step-two-register/step-two-register.module').then( m => m.StepTwoRegisterPageModule)
  },
  {
    path: 'last-step-register',
    loadChildren: () => import('./last-step-register/last-step-register.module').then( m => m.LastStepRegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

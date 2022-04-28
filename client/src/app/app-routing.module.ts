import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SubscriptionComponent } from './payment/subscription/subscription.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './user-auth/login/login.component';
import { RegisterComponent } from './user-auth/register/register.component';
import { PasswordRecoveryComponent } from './user-auth/password-recovery/password-recovery.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'subscription',
    component: SubscriptionComponent
  }, 
  {
    path: 'login',
    component: LoginComponent
  }, 
  {
    path: 'register',
    component: RegisterComponent
  },
  { 
    path: 'password-recovery',
    component: PasswordRecoveryComponent 
  },
  { 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full' 
  },
  { 
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
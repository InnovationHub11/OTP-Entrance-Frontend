import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Home} from './features/home/home';
import {Admin} from './features/admin/admin';
import {AddAdmin} from './features/add-admin/add-admin';
import {Qrcodes} from './features/qrcodes/qrcodes';
import {ForgotPassword} from './forgot-password/forgot-password';


const routes: Routes = [
  { path: 'home', component: Home },
  {path: 'userProfile',component:Qrcodes},
  {path: 'admin',component: Admin},
  {path: 'add-admin',component: AddAdmin},
  {path: 'forgot-password',component:ForgotPassword}
, { path: '', redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

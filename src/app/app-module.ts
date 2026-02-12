import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ScanQR } from './features/scan-qr/scan-qr';
import {Admin}  from './features/admin/admin';
import {AddAdmin} from './features/add-admin/add-admin';
import { Home } from './features/home/home';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {CommonModule} from '@angular/common';
import { Register } from './features/register/register';
import { LogIn } from './features/log-in/log-in';
import { Qrcodes } from './features/qrcodes/qrcodes';
import { ForgotPassword } from './forgot-password/forgot-password';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  declarations: [
    App,
    Home,
    ScanQR,
    Register,
    LogIn,
    Admin,
    AddAdmin,
    Qrcodes,
    ForgotPassword,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ZXingScannerModule,
    HttpClientModule,
    MatSnackBarModule,
    CommonModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }

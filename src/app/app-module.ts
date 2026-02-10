import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './features/home/home';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {CommonModule} from '@angular/common';
import { Qrcodes } from './features/qrcodes/qrcodes';
import { ForgotPassword } from './forgot-password/forgot-password';

@NgModule({
  declarations: [
    App,
    Home,
    Qrcodes,
    ForgotPassword,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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

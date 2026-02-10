import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../services/auth-service';

@Component({
  selector: 'app-forgot-password',
  standalone: false,
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {
  email: string = '';
  otp: string = '';
  newPassword: string = '';
  otpSent: boolean = false;
  idNumber: string = '';

  constructor(private http: HttpClient, private authService : AuthService) {}

  requestOtp(): void {
    this.http.post('http://localhost:8080/api/users/forgot-password', {
      idNumber: this.idNumber
    }).subscribe({
      next: (res: any) => {
        alert(res.message);
        this.otpSent = true;
      },
      error: (err) => {
        alert(err.error?.message || 'Error sending OTP');
      }
    });
  }

  resetPassword(): void {
    this.http.post('http://localhost:8080/api/users/reset-password-with-otp', {
      idNumber: this.idNumber,
      otp: this.otp,
      newPassword: this.newPassword
    }).subscribe({
      next: (res: any) => {
        alert(res.message);
        this.otpSent = false;
        this.idNumber = '';
        this.otp = '';
        this.newPassword = '';
      },
      error: (err) => {
        alert(err.error?.message || 'Error resetting password');
      }
    });
  }

}


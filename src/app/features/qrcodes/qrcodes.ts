import {Component, OnInit} from '@angular/core';
import {OtpService} from '../../services/otp-service';

@Component({
  selector: 'app-qrcodes',
  standalone: false,
  templateUrl: './qrcodes.html',
  styleUrl: './qrcodes.css',
})
export class Qrcodes implements OnInit {
  regNumber: string = '';
  otp: string = '';
  qrCodeUrl: string | null = null;
  userData: any;

  constructor(private otpService: OtpService) {}

  ngOnInit(): void {
    const data = localStorage.getItem('userData');
    if (data) {
      this.userData = JSON.parse(data);

      if (this.userData.qrCode) {
        // ✅ Add prefix here
        this.qrCodeUrl = 'data:image/png;base64,' + this.userData.qrCode;
      } else {
        console.error('No QR code found in userData');
      }
    }
  }

  generateQr() {
    if (!this.userData?.regNumber) {
      console.error('No registration number found in userData');
      return;
    }

    this.otpService.getQrCode(this.userData.regNumber).subscribe({
      next: (res) => {

        this.qrCodeUrl = 'data:image/png;base64,' + res.qrCode;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}

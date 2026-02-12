import { Component } from '@angular/core';
import {AuthService} from '../../services/auth-service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { BarcodeFormat } from '@zxing/library'

@Component({
  selector: 'app-scan-qr',
  standalone: false,
  templateUrl: './scan-qr.html',
  styleUrl: './scan-qr.css',
})
export class ScanQR {
  allowedFormats = [BarcodeFormat.QR_CODE];
  scannedRegNumber: string = '';
  constructor(private authService: AuthService, private snackBar: MatSnackBar) {}

  onScanSuccess(decodedText: string): void {
    this.scannedRegNumber = decodedText; this.authService.verifyQr(this.scannedRegNumber).subscribe({
      next: (res) => {
        if (res.success) {
          this.snackBar.open('User verified successfully!', 'Close', {
            duration: 5000, panelClass: ['snackbar-success']
          });
        } else {
          this.snackBar.open(res.message || 'Verification failed', 'Close', {
            duration: 5000, panelClass: ['snackbar-error']
          });
        }
        }, error: () => {
        this.snackBar.open('Error verifying QR code', 'Close', {
          duration: 5000, panelClass: ['snackbar-error']
        });
      }
    });
  }
}

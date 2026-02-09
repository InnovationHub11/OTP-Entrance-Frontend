import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  private baseUrl = 'http://localhost:8080/api/otp';

  constructor(private http: HttpClient) {}

  getQrCode(regNumber: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/qr?regNumber=${encodeURIComponent(regNumber)}`);
  }

  verifyOtp(regNumber: string, otp: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/verify`, { regNumber, otp });
  }
}

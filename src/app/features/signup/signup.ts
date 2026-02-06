import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User, UserService } from '../../services/user-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.html',       // matches file name
  styleUrls: ['./signup.css'],        // matches file name
  standalone: true,
  imports: [FormsModule]
})
export class Signup {
  formData: User & { confirmPassword: string } = {
    idNumber: 0,
    name: '',
    regNumber: '',
    password: '',
    role: '',
    confirmPassword: ''
  };

  message: string = '';

  constructor(private userService: UserService) {}

  onSubmit(): void {
    if (this.formData.password !== this.formData.confirmPassword) {
      this.message = 'Passwords do not match!';
      return;
    }

    this.userService.registerUser({
      idNumber: this.formData.idNumber,
      name: this.formData.name,
      regNumber: this.formData.regNumber,
      password: this.formData.password,
      role: this.formData.role
    }).subscribe({
      next: (res: { message: string }) => this.message = res.message,
      error: (err: { error: { message: any } }) =>
        this.message = 'Registration failed: ' + (err.error?.message || 'Unknown error')
    });
  }
}

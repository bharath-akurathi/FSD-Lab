import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './job-form.html',
  styleUrl: './job-form.css',
})
export class JobForm {
  user = {
    name: '',
    email: '',
    phone: ''
  };

  submitForm() {
    alert("Registration Successful!" );
    console.log(this.user);
  }
}

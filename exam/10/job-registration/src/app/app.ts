import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { JobForm } from "./job-form/job-form";

@Component({
  selector: 'app-root',
  imports: [ JobForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('job-registration');
}

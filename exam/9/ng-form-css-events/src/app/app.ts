import { Component, signal } from '@angular/core';
import { NgForm } from "./ng-form/ng-form";

@Component({
  selector: 'app-root',
  imports: [NgForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-form-css-events');
}

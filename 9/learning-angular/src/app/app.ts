import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';
import { Todos } from "./todos/todos";

@Component({
  selector: 'app-root',
  imports: [ FormsModule, Todos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('learning-angular');
  title : string = 'learning angular';
}

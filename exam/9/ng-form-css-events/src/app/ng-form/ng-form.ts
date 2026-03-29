import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-form',
  standalone:true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ng-form.html',
  styleUrl: './ng-form.css',
})
export class NgForm {
  name: string = '';
  message: string = '';
  changeColor: boolean = false;

  toggleHighlight() {
    this.changeColor = !this.changeColor;
  }

  submitForm() {
    if (this.name) {
      this.message = "Form submitted! Name: " + this.name;
      console.log(this.message);
    } 
    else {
      this.message = "Please enter a name";
    }
  }

}
import { Component } from '@angular/core';
import { Todo } from '../todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  imports: [CommonModule],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos {
  todos:Todo[];
  constructor(){
    this.todos = [
      {
        sno:1, title:"This is title1", desc:"This is desc1", active:true
      },
      {
        sno:2, title:"This is title2", desc:"This is desc2", active:false
      },
      {
        sno:3, title:"This is title3", desc:"This is desc3", active:true
      },
    ]
  }
}

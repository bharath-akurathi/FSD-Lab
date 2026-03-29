import { CommonModule } from '@angular/common';
import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './app.html'
})
export class App implements OnInit {
  students: any[] = [];
  student = {
    name: '',
    course: ''
  };
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.loadStudents();
  }

  loadStudents(){
    this.http.get<any[]>('http://localhost:3000/students')
    .subscribe(data => this.students = data);
  }

  addStudent(){
    this.http.post('http://localhost:3000/students',this.student)
    .subscribe(()=>{
      this.loadStudents();
      this.student = {name: '', course : ''};
    });
  }
}
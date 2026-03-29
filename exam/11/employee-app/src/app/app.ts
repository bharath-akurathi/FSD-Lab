import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';

interface Employee {
  id: number;
  name: string;
  salary: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  employees = signal<Employee[]>([]);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Employee[]>('employees.json').subscribe((data) => {
      this.employees.set(data);
    });
  }
}
# 12. Develop a web application to manage student information using Express and Angular

## Aim

To develop a web application to manage student information using Express as the backend and Angular as the frontend.

---

## Step-by-step procedure

### Part 1: Create the Express backend

**Step 1:** Create a folder named `backend` and open it in the terminal.

**Step 2:** Initialize the Node.js project.

```bash
npm init -y
```

**Step 3:** Install the required packages.

```bash
npm install express cors
```

**Step 4:** Create a file named `server.js`.

**Step 5:** Add the following code in `server.js`:

```js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let students = [
  { id: 1, name: 'John', course: 'BCA' },
  { id: 2, name: 'Alice', course: 'BSc' }
];

app.get('/students', (req, res) => {
  res.json(students);
});

app.post('/students', (req, res) => {
  const student = { id: Date.now(), ...req.body };
  students.push(student);
  res.json(student);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

**Step 6:** Run the backend server.

```bash
node server.js
```

---

### Part 2: Create the Angular frontend

**Step 7:** Create a new Angular project and open it in the terminal.

```bash
ng new frontend
cd frontend
```

**Step 8:** Update `app.config.ts` to enable HTTP support in modern Angular.

```ts
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient()
  ]
};
```

**Step 9:** Create or update `app.ts` with the following code:

```ts
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
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

  loadStudents() {
    this.http.get<any[]>('http://localhost:3000/students')
      .subscribe(data => this.students = data);
  }

  addStudent() {
    this.http.post('http://localhost:3000/students', this.student)
      .subscribe(() => {
        this.loadStudents();
        this.student = { name: '', course: '' };
      });
  }
}
```

**Step 10:** Create or update `app.html` with the following code:

```html
<h2>Student Information Management</h2>

<form (ngSubmit)="addStudent()">
  Name : <input type="text" name="name" [(ngModel)]="student.name" required><br><br>
  Course : <input type="text" name="course" [(ngModel)]="student.course" required><br><br>
  <button type="submit">Add Student</button>
</form>

<ul>
  <li *ngFor="let s of students">
    {{ s.id }} - {{ s.name }} - {{ s.course }}
  </li>
</ul>
```

**Step 11:** Run the Angular application.

```bash
ng serve
```

**Step 12:** Open the browser and view the application at:

```text
http://localhost:4200
```

---

## Result

The student information is successfully added and displayed using Express and Angular.

---

## Conclusion

Thus, a web application to manage student information was successfully developed using Express as the backend and Angular as the frontend.

---

## Short explanation of `app.config.ts`

* `provideHttpClient()` enables HTTP requests in standalone Angular.
* `provideRouter(routes)` enables routing.
* `provideBrowserGlobalErrorListeners()` helps handle browser errors globally.
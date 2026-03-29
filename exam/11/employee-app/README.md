Great 👍 — here is your **FULL OBSERVATION BOOK FORMAT** (neat, structured, ready to write in record 📄)

---

# 🧪 **Experiment No: 11**

# 📌 **Title**

Access JSON file data of employees using Angular HTTP service

---

# 🎯 **Aim**

To develop an Angular application that retrieves employee data from a JSON file using HTTP service and displays it in the browser.

---

# 🛠️ **Requirements**

* Node.js
* Angular CLI
* VS Code

---

# 📁 **Folder Structure**

```text
src/
 ├── app/
 │    ├── app.ts
 │    ├── app.html
 │    ├── app.css
 │    └── app.config.ts
 └── public/
      └── employees.json
```

---

# 📋 **Procedure**

1. Create a new Angular project using Angular CLI.
2. Create a JSON file named `employees.json` inside the `public` folder.
3. Configure `angular.json` to serve static files from `src/public`.
4. Import `HttpClient` and provide it using `provideHttpClient()` in `app.config.ts`.
5. Define an `Employee` interface for type safety.
6. Use Angular signals to store employee data.
7. Fetch JSON data using `HttpClient.get()` inside `ngOnInit()`.
8. Bind the data to the HTML template.
9. Display employee details using `*ngFor`.
10. Run the application using `ng serve`.

---

# 💻 **Program**

## 🔹 employees.json

```json
[
  { "id": 1, "name": "John", "salary": 50000 },
  { "id": 2, "name": "Alice", "salary": 60000 },
  { "id": 3, "name": "Bob", "salary": 55000 }
]
```

---

## 🔹 app.config.ts

```ts
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient()]
};
```

---

## 🔹 app.ts

```ts
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
    this.http.get<Employee[]>('employees.json')
      .subscribe(data => {
        this.employees.set(data);
      });
  }
}
```

---

## 🔹 app.html

```html
<h2>Employee List</h2>

<ul>
  <li *ngFor="let emp of employees()">
    {{ emp.id }} - {{ emp.name }} - {{ emp.salary }}
  </li>
</ul>
```

---

# 🧠 **Explanation**

* `HttpClient` → Used to fetch data from server
* `ngOnInit()` → Lifecycle hook to load data when component starts
* `signal()` → Stores reactive data
* `subscribe()` → Handles asynchronous response
* `*ngFor` → Displays list of employees

---

# 🧪 **Output**

👉 The application displays a list of employees with their ID, name, and salary.

---

# 📊 **Result**

The employee data was successfully retrieved from the JSON file and displayed in the browser.

---

# 📌 **Conclusion**

Thus, an Angular application was successfully developed to access JSON data using HTTP service.

---

# ⭐ **Viva Questions**

**1. What is HttpClient?**
→ Used to perform HTTP operations in Angular

**2. What is subscribe()?**
→ Used to handle asynchronous data

**3. What is signal()?**
→ Used for reactive state management

**4. What replaces `$http` in Angular?**
→ `HttpClient`

---
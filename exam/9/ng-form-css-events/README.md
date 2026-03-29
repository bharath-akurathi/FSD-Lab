# 🧪 **Experiment: 9. Develop an angular JS form to apply CSS and Events.**

# 🎯 **Aim**

To develop an Angular form that demonstrates:

* Two-way data binding
* Event handling
* Dynamic CSS styling

---

# 🛠️ **Requirements**

* Node.js
* Angular CLI
* Code editor (VS Code)

---

# 📋 **Procedure**

## 🔹 Step 1: Create a new Angular project

Open terminal and run:

```bash id="9k8q9w"
ng new ng-form-css-events
cd ng-form-css-events
ng serve
```

---

## 🔹 Step 2: Generate a component

```bash id="r1yz8y"
ng generate component ng-form
```

👉 This creates:
```
src/
 └── app/
      └── ng-form/
           ├── ng-form.ts
           ├── ng-form.html
           ├── ng-form.css
```

---

## 🔹 Step 3: Import required modules

Open `ng-form.ts` and import:

```ts id="0r6t7q"
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
```

---

## 🔹 Step 4: Configure component

Update the component decorator:

```ts id="x4j6lf"
@Component({
  selector: 'app-ng-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ng-form.html',
  styleUrls: ['./ng-form.css'],
})
```

---

## 🔹 Step 5: Define variables and methods

Inside class:

```ts id="9q8p7l"
name: string = '';
message: string = '';
changeColor: boolean = false;

toggleHighlight() {
  this.changeColor = !this.changeColor;
}

submitForm() {
  if (this.name) {
    this.message = "Form submitted! Name: " + this.name;
  } else {
    this.message = "Please enter a name";
  }
}
```

---

## 🔹 Step 6: Design HTML form

Open `ng-form.html`:

```html id="s4g7ka"
<h2>Angular Form</h2>

<form (ngSubmit)="submitForm()">
  <div class="box" [ngClass]="{'highlight': changeColor}">

    <label>Name : </label>
    <input type="text" [(ngModel)]="name" name="name" /><br>

    @if (name) {
      <p>Hello, {{name}}</p>
    }

    <p class="message">{{message}}</p>

    <button type="button" (click)="toggleHighlight()">Toggle CSS</button>
    <button type="submit">Submit</button>

  </div>
</form>
```

---

## 🔹 Step 7: Apply CSS styling

Open `ng-form.css`:

```css id="9m2kz5"
.box {
  border: 2px solid black;
  padding: 10px;
  width: 250px;
  margin-top: 10px;
  background-color: lightskyblue;
}

.highlight {
  background-color: lightgreen;
}
```

---

## 🔹 Step 8: Use the component

Add in main template (`app.html`):

```html id="l9f8dw"
<app-ng-form></app-ng-form>
```

---

## 🔹 Step 9: Run the application

```bash id="8n3v6s"
ng serve
```

Open browser:

```id="g2k9xp"
http://localhost:4200
```

---

# 🧠 **Result**

* The form accepts user input (name)
* Displays greeting dynamically
* Shows submission message
* CSS changes on button click

---

# 📌 **Conclusion**

Thus, an Angular form was successfully developed demonstrating:

* Two-way data binding using `ngModel`
* Event handling using `(click)` and `(ngSubmit)`
* Dynamic styling using `[ngClass]`

---

# ⭐ (Optional Viva Points)

* `ngModel` → two-way binding
* `ngSubmit` → form submission
* `[ngClass]` → dynamic CSS
* `standalone: true` → no module needed

---
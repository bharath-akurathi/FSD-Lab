# 🧪 **Experiment 10: Develop a Job Registration Form using Angular and perform validation**

---

# 🎯 **Aim**

To develop a Job Registration Form using Angular and validate user inputs using Angular form directives.

---

# 🛠️ **Requirements**

* Node.js
* Angular CLI
* VS Code

---

# 📁 **Folder Structure**

```text
src/
 └── app/
      └── job-form/
           ├── job-form.ts
           ├── job-form.html
           ├── job-form.css
```

---

# 📋 **Procedure**

## 🔹 Step 1: Create Angular Project

```bash
ng new job-registration
cd job-registration
ng serve
```

---

## 🔹 Step 2: Generate Component

```bash
ng generate component job-form
```

---

## 🔹 Step 3: Import Required Modules

```ts
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
```

---

## 🔹 Step 4: Configure Component

```ts
@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './job-form.html',
  styleUrls: ['./job-form.css'],
})
```

---

## 🔹 Step 5: Define Form Data

```ts
export class JobForm {
  user = {
    name: '',
    email: '',
    phone: ''
  };

  submitForm() {
    alert("Registration Successful!");
    console.log(this.user);
  }
}
```

---

## 🔹 Step 6: Design HTML Form with Validation

```html
<h2>Job Registration Form</h2>

<form #jobForm="ngForm" (ngSubmit)="submitForm()">

  <!-- Name -->
  <label>Name :</label>
  <input type="text" name="name" [(ngModel)]="user.name" required #nameCtrl="ngModel">
  @if (nameCtrl.invalid && nameCtrl.touched) {
    <div style="color:red">Name is required</div>
  }

  <br><br>

  <!-- Email -->
  <label>Email :</label>
  <input type="email" name="email" [(ngModel)]="user.email" required #emailCtrl="ngModel">
  @if (emailCtrl.invalid && emailCtrl.touched) {
    <div style="color:red">Enter valid email</div>
  }

  <br><br>

  <!-- Phone -->
  <label>Phone No :</label>
  <input type="text" name="phone" [(ngModel)]="user.phone"
         required pattern="^[0-9]{10}$" #phoneCtrl="ngModel">
  @if (phoneCtrl.invalid && phoneCtrl.touched) {
    <div style="color:red">Enter 10-digit phone number</div>
  }

  <br><br>

  <!-- Submit -->
  <button type="submit" [disabled]="jobForm.invalid">Register</button>

</form>
```

---

## 🔹 Step 7: Use Component

```html
<app-job-form></app-job-form>
```

---

## 🔹 Step 8: Run Application

```bash
ng serve
```

Open browser:

```
http://localhost:4200
```

---

# 🧠 **Result**

* The form accepts user details such as name, email, and phone number
* Validation ensures correct input format
* Error messages are displayed for invalid fields
* Submit button is enabled only when the form is valid

---

# 📌 **Conclusion**

Thus, a Job Registration Form was successfully developed using Angular with proper validation using `ngModel`, `ngForm`, and directives.

---

# 🧪 **Code Explanation (Line by Line)**

---

## 🔹 Title

```html
<h2>Job Registration Form</h2>
```

👉 Displays heading on the webpage
👉 No Angular logic here

---

## 🔹 Form Tag

```html
<form #jobForm="ngForm" (ngSubmit)="submitForm()">
```

### 🧠 Breakdown:

### ✅ `#jobForm="ngForm"`

* Creates a **template reference variable**
* `jobForm` refers to Angular’s form object
* Used for validation like:

```html
jobForm.invalid
```

---

### ✅ `(ngSubmit)="submitForm()"`

* Calls `submitForm()` when form is submitted
* Works only when form is valid (Angular-controlled)

---

# 🔹 Name Field

```html
<label>Name : </label>
```

👉 Displays label

---

```html
<input type="text" name="name" [(ngModel)]="user.name" required #nameCtrl="ngModel">
```

### 🧠 Breakdown:

### ✅ `type="text"`

* Input type

---

### ✅ `name="name"`

* Required for Angular forms
* Helps Angular track this field

---

### ✅ `[(ngModel)]="user.name"`

* Two-way data binding
* Updates:

  * UI → component
  * component → UI

---

### ✅ `required`

* Validation rule → field must not be empty

---

### ✅ `#nameCtrl="ngModel"`

* Creates reference to this input
* Gives access to:

```html
nameCtrl.invalid
nameCtrl.touched
```

---

## 🔹 Name Validation Message

```html
@if (nameCtrl.invalid && nameCtrl.touched) {
```

👉 Condition:

* `invalid` → field is wrong
* `touched` → user interacted

👉 Prevents showing error before user types

---

```html
<div style="color:red">
    Name is required
</div>
```

👉 Displays error message

---

---

# 🔹 Email Field

```html
<input type="email" name="email" [(ngModel)]="user.email" required #emailCtrl="ngModel">
```

### 🧠 Key points:

* `type="email"` → browser validation
* `required` → must not be empty
* `#emailCtrl` → access validation state

---

## 🔹 Email Validation

```html
@if (emailCtrl.invalid && emailCtrl.touched)
```

👉 Shows error if:

* Email is empty OR invalid format

---

---

# 🔹 Phone Field

```html
<input type="text" name="phone" [(ngModel)]="user.phone" required pattern="^[0-9]{10}$" #phoneCtrl="ngModel">
```

### 🧠 Breakdown:

### ✅ `pattern="^[0-9]{10}$"`

* Only allows:

  * Numbers (0–9)
  * Exactly 10 digits

---

### ✅ Example valid:

```
9876543210
```

---

### ❌ Invalid:

```
12345
abc1234567
```

---

## 🔹 Phone Validation

```html
@if (phoneCtrl.invalid && phoneCtrl.touched)
```

👉 Shows error when:

* Empty OR not matching pattern

---

---

# 🔹 Submit Button

```html
<button type="submit" [disabled]="jobForm.invalid">Register</button>
```

### 🧠 Breakdown:

### ✅ `type="submit"`

* Triggers form submission

---

### ✅ `[disabled]="jobForm.invalid"`

* Button disabled if form is invalid
* Uses:

```html
jobForm.invalid
```

👉 Ensures:

* User cannot submit wrong data

---

---

# 🔚 Closing Form

```html
</form>
```

👉 Ends form

---

# 🧠 Overall Flow

1. User enters data
2. Angular tracks input using `ngModel`
3. Validation rules apply
4. Errors shown using `@if`
5. Submit button enabled only when valid
6. `(ngSubmit)` triggers function

---

# 🧠 Quick Summary (for exam writing)

* `ngModel` → two-way binding
* `ngForm` → form control
* `required` → mandatory field
* `pattern` → custom validation
* `@if` → conditional display
* `[disabled]` → prevent invalid submit
--

# ⭐ **Viva Questions**

**1. What is ngModel?**
→ Used for two-way data binding

**2. What is ngForm?**
→ Used to manage form state and validation

**3. What is validation?**
→ Ensuring correct user input before submission

---

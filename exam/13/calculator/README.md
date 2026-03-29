œœ# Experiment: Simple Calculator using React JS (Vite)

## Aim

To create a **simple calculator application using React JS with Vite**.

---

# Step 1️⃣ Create Project using Vite

```bash
npm create vite@latest calculator-app
cd calculator-app
npm install
npm run dev
```

Choose:

```
React → JavaScript
```

---

# Step 2️⃣ Replace `src/App.jsx`

```javascript id="s9d4r1"
import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (op) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Enter valid numbers");
      return;
    }

    switch (op) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        setResult(b !== 0 ? a / b : "Cannot divide by zero");
        break;
      default:
        setResult("Invalid");
    }
  };

  const clear = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };

  return (
    <div style={styles.container}>
      <h1>Calculator</h1>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <div>
        <button onClick={() => calculate("+")}>+</button>
        <button onClick={() => calculate("-")}>-</button>
        <button onClick={() => calculate("*")}>*</button>
        <button onClick={() => calculate("/")}>/</button>
      </div>

      <button onClick={clear}>Clear</button>

      <h2>Result: {result}</h2>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px"
  }
};

export default App;
```

---

# Step 3️⃣ Run the Project

```bash
npm run dev
```

Open browser:

```
http://localhost:5173
```

---

# Output

* User enters two numbers
* Clicks operation (+, -, *, /)
* Result is displayed instantly

---

# Result

Thus, a **simple calculator application was successfully created using React JS with Vite**.
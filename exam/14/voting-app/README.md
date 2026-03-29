# Experiment: Voting Application using React JS

## Aim

To create a **voting application using React JS** that allows users to vote for candidates and display vote counts.

---

# Step 1: Create React App using Vite

```bash
npm create vite@latest voting-app
cd voting-app
npm install
npm run dev
```

Choose:

```bash
React -> JavaScript
```

---

# Step 2: Replace `src/App.jsx`

```javascript
import { useState } from "react";

function App() {

  const [bjp, setBjp] = useState(0);
  const [congress, setCongress] = useState(0);
  const [brs, setBrs] = useState(0);

  return (
    <div>
      <h1>Voting App</h1>

      <h3>BJP Votes: {bjp}</h3>
      <button onClick={() => setBjp(bjp + 1)}>Vote BJP</button>

      <h3>Congress Votes: {congress}</h3>
      <button onClick={() => setCongress(congress + 1)}>Vote Congress</button>

      <h3>BRS Votes: {brs}</h3>
      <button onClick={() => setBrs(brs + 1)}>Vote BRS</button>

      <br /><br />

      <button onClick={() => {
        setBjp(0);
        setCongress(0);
        setBrs(0);
      }}>
        Reset Votes
      </button>

    </div>
  );
}

export default App;
```

---

# Output

* User clicks a candidate button to vote.
* Vote count increases instantly.
* Reset button sets all votes back to zero.

---

# Result

Thus, a **Voting Application using React JS** was successfully created.
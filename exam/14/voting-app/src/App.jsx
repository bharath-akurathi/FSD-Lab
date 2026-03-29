import { useState } from "react";
import "./App.css"

function App() {

  const [bjp, setBjp] = useState(0);
  const [congress, setCongress] = useState(0);
  const [brs, setBrs] = useState(0);
  const [result, setResult] = useState("");

  const findWinner = () => {

    // No votes case
    if (bjp === 0 && congress === 0 && brs === 0) {
      setResult("No votes yet");
      return;
    }

    const max = Math.max(bjp, congress, brs);

    if (bjp === max && congress === max || 
        bjp === max && brs === max || 
        congress === max && brs === max) {
      setResult("Tie");
    }
    else if (bjp === max) {
      setResult("BJP");
    }
    else if (congress === max) {
      setResult("Congress");
    }
    else {
      setResult("BRS");
    }
  };

  const resetVotes = () => {
    setBjp(0);
    setCongress(0);
    setBrs(0);
    setResult("");
  };

  return (
    <div>

      <h1>Voting App</h1>

      <h3>BJP Votes: {bjp}</h3>
      <button onClick={() => setBjp(bjp + 1)}>Vote BJP</button>

      <h3>Congress Votes: {congress}</h3>
      <button onClick={() => setCongress(congress + 1)}>Vote Congress</button>

      <h3>BRS Votes: {brs}</h3>
      <button onClick={() => setBrs(brs + 1)}>Vote BRS</button> <br /><br />

      <button onClick={resetVotes}>Reset Votes</button><br/><br/>

      <button onClick={findWinner}>Find Winner</button>

      <h2>Winner: {result}</h2>

    </div>
  );
}

export default App;






// import { useState } from "react";

// function App() {

//   const [bjp, setBjp] = useState(0);
//   const [congress, setCongress] = useState(0);
//   const [brs, setBrs] = useState(0);

//   return (
//     <div>
//       <h1>Voting App</h1>

//       <h3>BJP Votes: {bjp}</h3>
//       <button onClick={() => setBjp(bjp + 1)}>Vote BJP</button>

//       <h3>Congress Votes: {congress}</h3>
//       <button onClick={() => setCongress(congress + 1)}>Vote Congress</button>

//       <h3>BRS Votes: {brs}</h3>
//       <button onClick={() => setBrs(brs + 1)}>Vote BRS</button>

//       <br /><br />

//       <button onClick={() => {
//         setBjp(0);
//         setCongress(0);
//         setBrs(0);
//       }}>
//         Reset Votes
//       </button>

//     </div>
//   );
// }

// export default App;
import "./App.css";
import { useReducer } from "react";

function App() {
  const [count, updateCount] = useReducer(countReducer, 0);

  function countReducer(state, action) {
    if (action === "increment") {
      return state + 1;
    } else if (action === "decrement") {
      return state - 1;
    } else if (action === "double") {
      return state * 2;
    } else if (action === "puissance") {
      return state * state;
    } else if (action === "diviser") {
      return state / 2;
    } else if (action === "aleatoire") {
      return Math.floor(Math.random() * 10000);
    } else if (action === "reset") {
      return (state = 0);
    } else {
      throw new Error();
    }
  }

  return (
    <div className="App">
      <h1>Compteur</h1>

      <button onClick={() => updateCount("increment")}>+1</button>
      <button onClick={() => updateCount("decrement")}>-1</button>
      <button onClick={() => updateCount("double")}>x2</button>
      <button onClick={() => updateCount("puissance")}>x lui même</button>
      <button onClick={() => updateCount("diviser")}>/2</button>
      <button onClick={() => updateCount("aleatoire")}>Aléatoire</button>
      <button onClick={() => updateCount("reset")}>Reset</button>

      <b>
        {" "}
        <p>Le résultat est : {count}</p>
      </b>
    </div>
  );
}

export default App;

import { useState } from "react";

import Counter from "./components/Counter/Counter";
import Header from "./components/Header";
import { log } from "./log.js";

function App() {
  log("<App /> rendered");

  const [enteredNumber, setEnteredNumber] = useState(0);
  const [chosenCount, setChosenCount] = useState(0);

  function handleChange(event) {
    setEnteredNumber(+event.target.value);
  }

  function handleSetClick() {
    setChosenCount(enteredNumber);
    setEnteredNumber(0);
  }

  return (
    <>
      <Header />
      <main>
        <section id="configure-counter">
          <h2>Set Counter</h2>
          <input type="number" onChange={handleChange} value={enteredNumber} />
          <button onClick={handleSetClick}>Set</button>
        </section>
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;

//NOTES:
// Rendering: react executes a component function (ex. App)

//memo(): compares prop values of a component (old vs new);
// if they are the exact same, the function won't execute
// for example Counter will reexecute only if initialCount is different from b4
// Use it as high up in the component tree as possible - blocking a component
// execution will also block all child component executions
// Checking props costs performance
// Dont use in component where props change often

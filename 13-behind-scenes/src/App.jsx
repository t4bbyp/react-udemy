import { useState } from "react";

import Counter from "./components/Counter/Counter";
import Header from "./components/Header";
import { log } from "./log.js";
import ConfigureCounter from "./components/Counter/ConfigureCounter.jsx";

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);


  function handleSetCount(newCount) {
    setChosenCount(newCount);
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount} />
        <Counter key={chosenCount} initialCount={chosenCount} />
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

//millionJS helps increase performance
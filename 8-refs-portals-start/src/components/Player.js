import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [pName, setPName] = useState(null);
  //const [submit, setSubmit] = useState(false);

  /*function handleChange(e) {
    setPName(e.target.value);
  }*/

  function handleClick() {
    //setSubmit(true);
    setPName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {pName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

//{pName ? pName : "unknown entity"} = {pName ?? "unknown entity"}

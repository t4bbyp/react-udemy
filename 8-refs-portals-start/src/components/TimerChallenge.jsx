import { useState } from "react";
import { useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  //const [timeExpired, setTimeExpired] = useState(false);
  //const [timeStart, setTimeStart] = useState(false);
  const timer = useRef();
  const dialog = useRef();
  const [timeLeft, setTimeLeft] = useState(targetTime * 1000);
  const timeActive = timeLeft > 0 && timeLeft < targetTime * 1000;

  if (timeLeft <= 0) {
    clearInterval(timer.current);
    dialog.current.showModal();
  }

  function handleReset() {
    setTimeLeft(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      //setTimeExpired(true);
      //dialog.current.showModal();
      //older react -> dialog.current.open();
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 10);
    }, 10);

    //setTimeStart(true);
  }

  function handleStop() {
    dialog.current.showModal();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        timeLeft={timeLeft}
        onReset={handleReset}
      />

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeActive ? handleStop : handleStart}>
            {timeActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timeActive ? "active" : undefined}>
          {timeActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}

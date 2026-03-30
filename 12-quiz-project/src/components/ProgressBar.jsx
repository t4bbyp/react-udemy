import { useEffect, useState } from "react";

export default function ProgressBar({ timer, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const timeOut = setTimeout(onTimeout, timer);

    return () => {
      clearTimeout(timeOut);
    };
  }, [timer, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" value={remainingTime} max={timer} />;
}

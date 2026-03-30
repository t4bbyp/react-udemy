import { createPortal } from "react-dom";
//for React>= v.19

export default function ResultModal({ ref, timeLeft, targetTime, onReset }) {
  const userLost = timeLeft <= 0;
  const formatTime = (timeLeft / 1000).toFixed(2);
  const score = Math.round((1 - timeLeft / (targetTime * 1000)) * 100);

  return createPortal(
    <dialog ref={ref} className="result-modal" onClose={onReset}>
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the tier with <strong>{formatTime}</strong> seconds left.
      </p>

      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}

//older react
/*
import {forwardRef, useImperativeHandle, useRef} from 'react';

const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
  const dialog = useRef();
  
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    }
  });
  
  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the tier with <strong>X</strong> seconds left.
      </p>

      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
*/

import Player from "./components/Player";
import TimerChallenge from "./components/TimerChallenge";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Medium" targetTime={5} />
        <TimerChallenge title="Hard" targetTime={10} />
        <TimerChallenge title="Death" targetTime={20} />
      </div>
    </>
  );
}

export default App;

export default function Stats({ stats }) {
  const totalAnswers = 7;

  function givePercentage(targetNr, totalNr) {
    return parseInt((100 * targetNr) / totalNr);
  }

  return (
    <div id="summary-stats">
      <p>
        <div className="number">
          {givePercentage(stats.skipped, totalAnswers)}%
        </div>
        <div className="text">SKIPPED</div>
      </p>

      <p>
        <div className="number">
          {givePercentage(stats.correct, totalAnswers)}%
        </div>
        <div className="text">answered correctly</div>
      </p>

      <p>
        <div className="number">
          {givePercentage(stats.wrong, totalAnswers)}%
        </div>
        <div className="text">answered incorrectly</div>
      </p>
    </div>
  );
}

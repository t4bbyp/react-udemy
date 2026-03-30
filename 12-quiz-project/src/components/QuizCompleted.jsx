import completedImg from "../assets/quiz-complete.png";
import Stats from "./Stats";
import { questions } from "../assets/questions";

export default function QuizCompleted({ stats, userAnswers }) {
  return (
    <div id="summary">
      <img src={completedImg} />
      <h2>QUIZ COMPLETED!</h2>

      <Stats stats={stats} />

      <ol>
        {userAnswers.map((answer, index) => {
          let cssClasses = "user-answer";

          if (answer === null) {
            cssClasses += " skipped";
          } else if (answer === questions[index].answers[0]) {
            cssClasses += " correct";
          } else {
            cssClasses += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{questions[index].text}</p>
              <p className={cssClasses}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

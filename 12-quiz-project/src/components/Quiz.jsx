import { useEffect, useState, useCallback } from "react";
import ProgressBar from "./ProgressBar";
import QuizCompleted from "./QuizCompleted";

export default function Quiz({ questions }) {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const TIMER = 10000;
  const activeQuestionIndex =
    selectedAnswer === "" ? userAnswer.length : userAnswer.length - 1;
  const quizComplete = activeQuestionIndex === questions.length;

  let stats = {
    skipped: 0,
    correct: 0,
    wrong: 0,
  };

  /*
  useEffect(() => {
    const timer = setTimeout(() => {});
  }, TIMER);
  */

  const clickAnswer = useCallback(
    function clickAnswer(clickedAnswer) {
      setSelectedAnswer("selected");

      setUserAnswer((prevUserAnswer) => {
        return [...prevUserAnswer, clickedAnswer];
      });

      setTimeout(() => {
        if (clickedAnswer === questions[activeQuestionIndex].answers[0]) {
          setSelectedAnswer("correct");
        } else {
          setSelectedAnswer("wrong");
        }

        setTimeout(() => {
          setSelectedAnswer("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const skipAnswer = useCallback(() => clickAnswer(null), [clickAnswer]);

  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    if (quizComplete) return;

    const answers = [...questions[activeQuestionIndex].answers];
    answers.sort(() => Math.random() - 0.5);
    setShuffledAnswers(answers);
  }, [activeQuestionIndex, questions]);

  if (quizComplete) {
    userAnswer.forEach((answer, index) => {
      if (answer === questions[index].answers[0]) {
        stats.correct++;
      } else if (answer === null) {
        stats.skipped++;
      } else {
        stats.wrong++;
      }
    });

    console.log("correct: " + stats.correct);
    console.log("wrong: " + stats.wrong);
    console.log("empty: " + stats.skipped);

    return <QuizCompleted stats={stats} userAnswers={userAnswer} />;
  }

  return (
    <div id="quiz">
      <div id="question">
        <ProgressBar
          timer={TIMER}
          onTimeout={skipAnswer}
          key={activeQuestionIndex}
        />
        <h2>{questions[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => {
            const isSelected = userAnswer[userAnswer.length - 1] === answer;
            let btnClass = "";

            if (selectedAnswer === "selected" && isSelected) {
              btnClass = "selected";
            }

            if (
              (selectedAnswer === "correct" || selectedAnswer === "wrong") &&
              isSelected
            ) {
              btnClass = selectedAnswer;
            }

            return (
              <li key={answer} className="answer">
                <button
                  className={btnClass}
                  onClick={() => clickAnswer(answer)}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

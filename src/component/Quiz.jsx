
import React, { useState } from 'react';
import './Quiz.css'

const questions = [
  {
    questionText: 'who is caption of straw hat?',
    answerOptions: [
      { answerText: 'Zoro', isCorrect: false },
      { answerText: 'Sanji', isCorrect: false },
      { answerText: 'Luffy', isCorrect: true },
      { answerText: 'Brook', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is the father of moder computer ?',
    answerOptions: [
      { answerText: 'Charles Babbage', isCorrect: false },
      { answerText: 'Alen turing', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    questionText: 'what is command to create folder in linux?',
    answerOptions: [
      { answerText: 'mkdir', isCorrect: true },
      { answerText: 'rmdir', isCorrect: false },
      { answerText: 'makedir', isCorrect: false },
      { answerText: 'catdir', isCorrect: false },
    ],
  },
  {
    questionText: 'which is the national bird of japan?',
    answerOptions: [
      { answerText: 'Cat', isCorrect: false },
      { answerText: 'Dove', isCorrect: false },
      { answerText: 'Crow', isCorrect: false },
      { answerText: 'penguin', isCorrect: true },
    ],
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='quiz'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button key={index} onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;

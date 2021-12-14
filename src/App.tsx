import React, {useState} from 'react';
import QuestionCard from './components/QuestionCard'; 
import { getQuestions, QuizLevel } from './api/API';

const total_questions = 10; 

const App = () => {
  
  const [loading, setLoading] = useState(false); 
  const [questions, setQuestions] = useState([]); 
  const [number, setNumber] = useState(0); 
  const [userAnswers, setUserAnswers] = useState([]); 
  const [score, setScore] =  useState(0); 
  const [quizOver, SetQuizOver] = useState(true); 


  const startQuiz = async () => {
    getQuestions(total_questions, QuizLevel.EASY); 
  }
  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
  }
  const nextQuestion = () => {
  }
  return (
    <div className="App">
      <button className="start" onClick={startQuiz}>Start</button>
      <p className="score">Score:</p>
      <p className="loading">Loading Questions...</p>
      {/* <QuestionCard 
        questionNr={number+1}
        totalQuestions={total_questions}
        question={questions[number].question}
        answers={questions[number].answer}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}
export default App;
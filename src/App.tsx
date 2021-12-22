import React, {useState} from 'react';
import QuestionCard from './components/QuestionCard'; 
import { getQuestions} from './api/API';
import { QuestionState, QuizLevel, AnswerObject } from './controllers/QuestionsHandler';
import { GlobalStyle, Wrapper } from './styles/app';

const total_questions = 10; 

const App = () => {
  
  const [loading, setLoading] = useState(false); 
  const [questions, setQuestions] = useState<QuestionState[]>([]); 
  const [number, setNumber] = useState(0); 
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]); 
  const [score, setScore] =  useState(0); 
  const [quizOver, setQuizOver] = useState(true); 


  const startQuiz = async () => {
    try{
      setLoading(true); 
      setQuizOver(false); 

      const questions = await getQuestions(total_questions, QuizLevel.EASY); 
      setQuestions(questions); 

      setScore(0); 
      setUserAnswers([]);
      setNumber(0); 
      setLoading(false);  
    }catch {
      console.log('Error occured during fetching questions from the api'); 
    }
  }

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    
    if(!quizOver){
      
      const userAnswer = event.currentTarget.value; 

      const isAnswered = questions[number].correct_answer === userAnswer; 

      if(isAnswered) 
        setScore(prev => prev + 1);
      
      const answeredObj = {
        question: questions[number].question, 
        userAnswer, 
        isAnswered, 
        correctAnswer: questions[number].correct_answer
      }; 

      setUserAnswers((prev) => [...prev, answeredObj]); 
    }
  }

  const nextQuestion = () => {

    const next = number + 1; 

    (next === total_questions) ?

      setQuizOver(true)

    : setNumber(next); 

  }
  return (
    <>
      <GlobalStyle/>
      <Wrapper>

        <h1>Give a quiz and test your knowledge</h1>

        {
          (quizOver  || userAnswers.length === total_questions) ? (

            <button className="start" onClick={startQuiz}>Start</button>

          ): null 
        }

        { !quizOver ? <p className="score">Score: {score}</p> : null }

        { loading && <p className="loading">Loading Questions...</p> }
        {
          !loading && !quizOver && (
            <QuestionCard 
              questionNr={number+1}
              totalQuestions={total_questions}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
            />
          )
        }
        { 
          !quizOver && 
        
          !loading && 
        
          userAnswers.length === number + 1 && 
        
          number !== total_questions - 1 
          ? 
          (
            <button className="next" onClick={nextQuestion}>Next Question</button>
          ) : null 
        }
      </Wrapper>
    </>
  );
}
export default App;
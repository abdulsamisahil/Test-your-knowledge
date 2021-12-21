import React from "react"; 
import { AnswerObject } from "../controllers/QuestionsHandler";
import { Wrapper, ButtonWrapper} from "../styles/questioncard"; 

type questionProps = {
    question: string; 
    answers: string []; 
    callback: (event: React.MouseEvent<HTMLButtonElement>) => void; 
    userAnswer: AnswerObject | undefined; 
    questionNr: number; 
    totalQuestions: number
}

const QuestionCard: React.FC<questionProps> = ({question, answers, callback, userAnswer, questionNr, totalQuestions}) => {
    return (
        <Wrapper>
            <p className="number">
                Question: {questionNr} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html: question}}/>
            <div>
                {answers.map(answer => (
                    <ButtonWrapper 
                    key={answer}
                    correct={userAnswer?.correctAnswer === answer}
                    isClicked={userAnswer?.userAnswer === answer}>
                        <button disabled={userAnswer ? true : false} onClick={callback} value={answer}>
                            <span dangerouslySetInnerHTML={{__html: answer}}/>
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </Wrapper>
    ); 
}
export default QuestionCard; 
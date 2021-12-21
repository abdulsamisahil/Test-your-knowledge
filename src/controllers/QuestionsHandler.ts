/**In this file we control and store all the logics reg questions */

export type Question = {
    category: string, 
    correct_answer: string, 
    difficulty: string, 
    incorrect_answers: string [], 
    question: string, 
    type: string
}

export type QuestionState = Question & {answers: string []};

export enum QuizLevel {
    EASY = 'easy', 
    MEDIUM = 'medium',
    HARD = 'hard'
}
export type AnswerObject = {
    question: string, 
    userAnswer: string, 
    isAnswered: boolean, 
    correctAnswer: string
}

export const RandomizeQues = (questions : any[]) =>
    [...questions].sort(() => Math.random() - 0.5); 

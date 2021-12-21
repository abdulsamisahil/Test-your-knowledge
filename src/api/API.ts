// here we will call the api to get questions in json 
// https://opentdb.com/api.php?amount=10
// start at: 0.32.05
import { RandomizeQues, Question, QuizLevel } from "../controllers/QuestionsHandler";

export const getQuestions = async (amount: number, difficulty: QuizLevel) => 
{
    const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`; 
    const response = await (await (await fetch(url)).json()); 

    return response.results.map((que: Question) => ({
        ...que, 
        answers: RandomizeQues([
            ...que.incorrect_answers, 
            que.correct_answer
        ])
    })); 
}

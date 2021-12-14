// here we will call the api to get questions in json 
// https://opentdb.com/api.php?amount=10
// start at: 0.32.05

export enum QuizLevel {
    EASY = 'easy', 
    MEDIUM = 'medium',
    HARD = 'hard'
}

export const getQuestions = async (amount: number, difficulty: QuizLevel) => 
{
    const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`; 
    const response = await (await (await fetch(url)).json()); 
    console.log(response); 
}

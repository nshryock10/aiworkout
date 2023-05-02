export const getQuestions = () => {
    return questions;
}

const questions = [
    {
        id: 1,
        questionKey: 'experience',
        question: 'What is your experience level?',
        options: ['Beginner', 'Intermediate', 'Expert'],
        answer: null
    },
    {
        id: 2,
        questionKey: 'days',
        question: 'How many days / week do you want to workout?',
        options: ['1', '2', '3', '4', '5', '6', '7'],
        answer: null
    }
];
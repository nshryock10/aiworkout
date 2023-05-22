export const getQuestions = () => {
    return questions;
}

export const getPrompt = (inputs) => {

    const type = inputs.type.toString();
    const equipment = inputs.equipment.toString();
    const muscles = inputs.muscles.toString();
    const methodology = inputs.methods.toString();

    const prompt = `\n
        Give me a ${inputs.experience} level workout program for ${inputs.days} day(s) per week that is ${inputs.weeks} week(s) long.
        
        Each workout should last approximately ${inputs.minutes} minutes.
        
        The workouts should focus on ${type} that only utilizes the following equipment: ${equipment}.
        
        The workouts should target ${muscles} muscle groups.

        Incorporate ${methodology} methodologies.
        
        Reutrn the response in the following object and array format
        {
            weeks: [
                {
                    week: value,
                    days: [
                        {
                            day: value,
                            description: value,
                            warmup: [
                                {
                                    step: value,
                                    description: value,
                                    sets: value,
                                    reps: value,
                                    rest: value
                                }
                            ],
                            workout: [
                                {
                                    step: value,
                                    description: value,
                                    sets: value,
                                    reps: value,
                                    rest: value
                                }
                            ]
                        }
                    ]
                }
            ]
        }`;

    return prompt;
}

const questions = [
    {
        id: 1,
        questionKey: 'experience',
        question: 'What is your experience level?',
        options: ['Beginner', 'Intermediate', 'Expert'],
        answer: 'single'
    },
    {
        id: 2,
        questionKey: 'type',
        question: 'What type(s) of workouts do you want in this program?',
        options: ['Strength training', 'Cardio', 'Mobility'],
        answer: 'multiple'
    },
    {
        id: 3,
        questionKey: 'days',
        question: 'How many days/week do you want to workout?',
        options: ['1', '2', '3', '4', '5', '6', '7'],
        answer: 'single'
    },
    {
        id: 4,
        questionKey: 'weeks',
        question: 'How many weeks do you want your program to last?',
        options: '',
        answer: 'text'
    },
    {
        id: 5,
        questionKey: 'minutes',
        question: 'How how long can you workout each day?',
        options: [5, 10, 15, 30, 45, 60, '60+'],
        answer: 'single'
    },
    {
        id: 6,
        questionKey: 'muscles',
        question: 'What muscle groups do you want to target?',
        options: ['Full body', 'Upper body', 'Lower body', 'Core', 'Push strength', 'Pull strength'],
        answer: 'multiple',
        subQuestion: {
            id: '6b',
            questionKey: 'sub-muscles',
            question: 'Target a more specific muscle group',
            options: ['Chest', 'Shoulders', 'Back', 'Glutes', 'Quads', 'Calves', 'Biceps', 'Triceps', 'Forearm'],
            answer: 'multiple'
        }
    },
    {
        id: 7,
        questionKey: 'equipment',
        question: 'What equipment do you want to utilize?',
        options: [
                    {
                        category: 'Weights & Cables',
                        options: ['Barbell', 'Dumbbell', 'Hi-Lo Cable', 'Kettlebell', 'Pulldown Cable']
                    },
                    {
                        category: 'Cardio',
                        options: ['Assult Bike', 'Peleton', 'Elliptical', 'Treadmill', 'Stair Stepper', 'Rower', 'Skierg']
                    },
                    {
                        category: 'Other',
                        options: ['Medicine Ball', 'Resistance Bands', 'Battle Ropes', 'Jump Rope', 'TRX']
                    }
                ],
        answer: 'multiple'
    },
    {
        id: 8,
        questionKey: 'methods',
        question: 'Are there specific methodologies you want to incorporate?',
        options: ['Traditional Strength Training', 'HIIT', 'AMRAP', 'EMOM', "Supersets"],
        answer: 'multiple'
    },
];
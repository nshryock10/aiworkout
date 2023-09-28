export const getQuestions = () => {
    return questions;
}

export const getPrompt = (inputs) => {

    const type = inputs.type.toString();
    const equipment = inputs.equipment.toString();
    const muscles = inputs.muscles.toString();
    const methodology = inputs.methods.toString();
    const weeks = 1 //inputs.weeks

    const prompt = `\n
        Give me a ${inputs.experience} level workout program for ${inputs.days} day(s) per week that is ${weeks} week(s) long.
        
        Each workout should last approximately ${inputs.minutes} minutes.
        
        The workouts should focus on ${type} that only utilizes the following equipment: ${equipment}.
        
        The workouts should target ${muscles} muscle groups.

        Incorporate ${methodology} methodologies.

        Return a workout. It is understood that chatGPT is only an AI language model and these are only recommendations. 

        Reutrn the response in the following JSON object and array format
        {
            "weeks": [
                {
                    "week": "value",
                    "days": [
                        {
                            "day": "value",
                            "description": "value",
                            "warmup": [
                                {
                                    "step": "value",
                                    "description": "value",
                                    "sets": "value",
                                    "reps": "value",
                                    "rest": "value"
                                }
                            ],
                            "workout": [
                                {
                                    "step": "value",
                                    "description": "value",
                                    "sets": "value",
                                    "reps": "value",
                                    "rest": "value"
                                }
                            ]
                        }
                    ]
                }
            ],
            "liability": "value" 
        }`;

    return prompt;
}

const questions = [
    {
        id: 1,
        questionKey: 'experience',
        question: 'What is your experience level?',
        options: ['Beginner', 'Intermediate', 'Advanced'],
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
        answer: 'range',
        options: '',
        max: 7,
        min: 1,
        step: 1,
        unit: 'days'
    },
   /* {
        id: 4,
        questionKey: 'weeks',
        question: 'How many weeks do you want your program to last?',
        answer: 'range',
        options: '',
        max: 4,
        min: 1,
        step: 1,
        unit: 'weeks'
    },*/
    {
        id: 5,
        questionKey: 'minutes',
        question: 'How how long can you workout each day?',
        answer: 'range',
        options: '',
        max: 90,
        min: 5,
        step: 5,
        unit: 'minutes'
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
                        options: ['Assault Bike', 'Peleton', 'Elliptical', 'Treadmill', 'Stair Stepper', 'Rower', 'Skierg']
                    },
                    {
                        category: 'Other',
                        options: ['Pull-up Bar', 'Medicine Ball', 'Resistance Bands', 'Battle Ropes', 'Jump Rope', 'TRX']
                    }
                ],
        answer: 'multiple'
    },
    {
        id: 8,
        questionKey: 'methods',
        question: 'Are there specific methodologies you want to incorporate?',
        options: ['Traditional Strength Training', 'Body weight exercises', 'Calisthenics', 'HIIT', 'EMOM', 'Supersets', 'Running'],
        answer: 'multiple'
    },
];

export const getWorkoutData = () => {

    return(
    {
        "weeks": [
            {
                "week": "Week 1",
                "days": [
                    {
                        "day": "Day 1",
                        "description": "Traditional Strength Training",
                        "warmup": [
                            {
                                "step": "Step 1",
                                "description": "10 minutes light cardio on the Rower or Skierg",
                                "sets": "1",
                                "reps": "1",
                                "rest": "0 seconds"
                            },
                            {
                                "step": "Step 2",
                                "description": "10 reps each of Arm Circles, Leg Swings, Lunges, Squats, Sit-Ups, and Push-Ups",
                                "sets": "1",
                                "reps": "10",
                                "rest": "0 seconds"
                            }
                        ],
                        "workout": [
                            {
                                "step": "Step 1",
                                "description": "Back Squat",
                                "sets": "4",
                                "reps": "8",
                                "rest": "90 seconds"
                            },
                            {
                                "step": "Step 2",
                                "description": "Bent Over Row",
                                "sets": "4",
                                "reps": "8",
                                "rest": "90 seconds"
                            },
                            {
                                "step": "Step 3",
                                "description": "Push Press",
                                "sets": "4",
                                "reps": "8",
                                "rest": "90 seconds"
                            },
                            {
                                "step": "Step 4",
                                "description": "Romanian Deadlift",
                                "sets": "4",
                                "reps": "8",
                                "rest": "90 seconds"
                            },
                            {
                                "step": "Step 5",
                                "description": "Plank",
                                "sets": "3",
                                "reps": "30 seconds",
                                "rest": "30 seconds"
                            }
                        ]
                    },
                    {
                        "day": "Day 2",
                        "description": "EMOM and Supersets",
                        "warmup": [
                            {
                                "step": "Step 1",
                                "description": "10 minutes light cardio on the Rower or Skierg",
                                "sets": "1",
                                "reps": "1",
                                "rest": "0 seconds"
                            },
                            {
                                "step": "Step 2",
                                "description": "10 reps each of Arm Circles, Leg Swings, Lunges, Squats, Sit-Ups, and Push-Ups",
                                "sets": "1",
                                "reps": "10",
                                "rest": "0 seconds"
                            }
                        ],
                        "workout": [
                            {
                                "step": "Step 1",
                                "description": "Every Minute On the Minute (EMOM) - 10 minutes",
                                "sets": "10",
                                "reps": "10 Kettlebell Swings",
                                "rest": "0 seconds"
                            },
                            {
                                "step": "Step 2",
                                "description": "Supersets - 3 sets",
                                "sets": "3",
                                "reps": "10 Barbell Bench Press / 10 Pull-Ups",
                                "rest": "90 seconds"
                            },
                            {
                                "step": "Step 3",
                                "description": "Supersets - 3 sets",
                                "sets": "3",
                                "reps": "10 Dumbbell Bicep Curls / 10 Tricep Cable Push-Downs",
                                "rest": "90 seconds"
                            },
                            {
                                "step": "Step 4",
                                "description": "Finisher - 3 sets",
                                "sets": "3",
                                "reps": "20 Medicine Ball Sit-Ups / 20 Resistance Band Pull-Throughs",
                                "rest": "60 seconds"
                            }
                        ]
                    },
                    {
                        "day": "Day 3",
                        "description": "Mobility",
                        "warmup": [
                            {
                                "step": "Step 1",
                                "description": "10 minutes light cardio on the Rower or Skierg",
                                "sets": "1",
                                "reps": "1",
                                "rest": "0 seconds"
                            },
                            {
                                "step": "Step 2",
                                "description": "10 reps each of Arm Circles, Leg Swings, Lunges, Squats, Sit-Ups, and Push-Ups",
                                "sets": "1",
                                "reps": "10",
                                "rest": "0 seconds"
                            }
                        ],
                        "workout": [
                            {
                                "step": "Step 1",
                                "description": "Foam Rolling - Quads, Hamstrings, Calves, Back",
                                "sets": "1",
                                "reps": "30 seconds each",
                                "rest": "0 seconds"
                            },
                            {
                                "step": "Step 2",
                                "description": "Dynamic Stretching - Leg Swings, Lunge with Twist, Inchworms, Arm Circles",
                                "sets": "1",
                                "reps": "10 each",
                                "rest": "0 seconds"
                            },
                            {
                                "step": "Step 3",
                                "description": "Yoga Flow - Sun Salutation A, Sun Salutation B, Warrior 1, Warrior 2, Triangle Pose, Downward Dog",
                                "sets": "1",
                                "reps": "5 flows",
                                "rest": "0 seconds"
                            },
                            {
                                "step": "Step 4",
                                "description": "Cool-Down - 10 minutes light cardio on the Rower or Skierg",
                                "sets": "1",
                                "reps": "1",
                                "rest": "0 seconds"
                            }
                        ]
                    },
                    {
                        "day": "Day 4",
                        "description": "Cardio and Core",
                        "warmup": [
                            {
                                "step": "Step 1",
                                "description": "10 minutes light cardio on the Rower or Skierg",
                                "sets": "1",
                                "reps": "1",
                                "rest": "0 seconds"
                            },
                            {
                                "step": "Step 2",
                                "description": "10 reps each of Arm Circles, Leg Swings, Lunges, Squats, Sit-Ups, and Push-Ups",
                                "sets": "1",
                                "reps": "10",
                                "rest": "0 seconds"
                            }
                        ],
                        "workout": [
                            {
                                "step": "Step 1",
                                "description": "Assault Bike - 4 rounds, 30 seconds max effort, 30 seconds rest",
                                "sets": "4",
                                "reps": "30 seconds",
                                "rest": "30 seconds"
                            },
                            {
                                "step": "Step 2",
                                "description": "Rowing - 4 rounds, 500m max effort, 90 seconds rest",
                                "sets": "4",
                                "reps": "500m",
                                "rest": "90 seconds"
                            },
                            {
                                "step": "Step 3",
                                "description": "Skierg - 4 rounds, 30 seconds max effort, 30 seconds rest",
                                "sets": "4",
                                "reps": "30 seconds",
                                "rest": "30 seconds"
                            },
                            {
                                "step": "Step 4",
                                "description": "Core Circuit - 3 sets",
                                "sets": "3",
                                "reps": "20 Russian Twists / 20 Bicycle Crunches / 20 Leg Raises",
                                "rest": "60 seconds"
                            }
                        ]
                    }
                ]
            },
            {
                "week": "Week 2",
                "days": [
                    {
                        "day": "Day 1",
                        "description": "EMOM and Supersets",
                        "warmup": [
                            {
                                "step": "Step 1",
                                "description": "10 minutes light cardio on the Rower or Skierg",
                                "sets": "1",
                                "reps": "1",
                                "rest": "0 seconds"
                            },
                            {
                                "step": "Step 2",
                                "description": "10 reps each of Arm Circles, Leg Swings, Lunges, Squats, Sit-Ups, and Push-Ups",
                                "sets": "1",
                                "reps": "10",
                                "rest": "0 seconds"
                            }
                        ],
                        "workout": [
                            {
                                "step": "Step 1",
                                "description": "Every Minute On the Minute (EMOM) - 10 minutes",
                                "sets": "10",
                                "reps": "10 Kettlebell Clean and Press",
                                "rest": "0 seconds"
                            },
                            {
                                "step": "Step 2",
                                "description": "Supersets - 3 sets",
                                "sets": "3",
                                "reps": "8 Deadlifts / 10 Pull-Ups",
                                "rest": "90 seconds"
                            },
                            {
                                "step": "Step 3",
                                "description": "Supersets - 3 sets",
                                "sets": "3",
                                "reps": "10 Dumbbell Chest Flyes / 10 Tricep Cable Extensions",
                                "rest": "90 seconds"
                            },
                            {
                                "step": "Step 4",
                                "description": "Finisher - 3 sets",
                                "sets": "3",
                                "reps": "20 Medicine Ball Slams / 20 Resistance Band Rows",
                                "rest": "60 seconds"
                            }
                        ]
                    },
                    {
                        "day": "Day 2",
                        "description": "Cardio and Core",
                        "warmup": [
                            {
                                "step": "Step 1",
                                "description": "10 minutes light cardio on the Rower or Skierg",
                                "sets": "1",
                                "reps": "1",
                                "rest": "0 seconds"
                            },
                            {
                                "step": "Step 2",
                                "description": "10 reps each of Arm Circles, Leg Swings, Lunges, Squats, Sit-Ups, and Push-Ups",
                                "sets": "1",
                                "reps": "10",
                                "rest": "0 seconds"
                            }
                        ],
                        "workout": [
                            {
                                "step": "Step 1",
                                "description": "Assault Bike - 5 rounds, 20 seconds max effort, 40 seconds rest",
                                "sets": "5",
                                "reps": "20 seconds",
                                "rest": "40 seconds"
                            },
                            {
                                "step": "Step 2",
                                "description": "Rowing - 5 rounds, 750m max effort, 2 minutes rest",
                                "sets": "5",
                                "reps": "750m",
                                "rest": "2 minutes"
                            },
                            {
                                "step": "Step 3",
                                "description": "Skierg - 5 rounds, 20 seconds max effort, 40 seconds rest",
                                "sets": "5",
                                "reps": "20 seconds",
                                "rest": "40 seconds"
                            },
                            {
                                "step": "Step 4",
                                "description": "Core Circuit - 3 sets",
                                "sets": "3",
                                "reps": "20 V-Ups / 20 Plank Knee Tucks / 20 Supermans",
                                "rest": "60 seconds"
                            }
                        ]
                    },
                    {
                        "day": "Day 3",
                        "description": "Traditional Strength Training",
                        "warmup": [
                            {
                                "step": "Step 1",
                                "description": "10 minutes light cardio on the Rower or Skierg",
                                "sets": "1",
                                "reps": "1",
                                "rest": "0 seconds"
                            },
                            {
                                "step": "Step 2",
                                "description": "10 reps each of Arm Circles, Leg Swings, Lunges, Squats, Sit-Ups, and Push-Ups",
                                "sets": "1",
                                "reps": "10",
                                "rest": "0 seconds"
                            }
                        ],
                        "workout": [
                            {
                                "step": "Step 1",
                                "description": "Deadlift",
                                "sets": "4",
                                "reps": "8",
                                "rest": "90 seconds"
                            },
                            {
                                "step": "Step 2",
                                "description": "Bench Press",
                                "sets": "4",
                                "reps": "8",
                                "rest": "90 seconds"
                            },
                            {
                                "step": "Step 3",
                                "description": "Weighted Pull-Ups",
                                "sets": "4",
                                "reps": "8",
                                "rest": "90 seconds"
                            },
                            {
                                "step": "Step 4",
                                "description": "Barbell Lunges",
                                "sets": "4",
                                "reps": "8",
                                "rest": "90 seconds"
                            },
                            {
                                "step": "Step 5",
                                "description": "Hanging Leg Raise",
                                "sets": "3",
                                "reps": "10",
                                "rest": "30 seconds"
                            }
                        ]
                    },
                    {
                        "day": "Day 4",
                        "description": "Mobility",
                        "warmup": [
                            {
                                "step": "Step 1",
                                "description": "10 minutes light cardio on the Rower or Skierg",
                                "sets": "1",
                                "reps": "1",
                                "rest": "0 seconds"
                            },
                            {
                                "step": "Step 2",
                                "description": "10 reps each of Arm Circles, Leg Swings, Lunges, Squats, Sit-Ups, and Push-Ups",
                                "sets": "1",
                                "reps": "10",
                                "rest": "0 seconds"
                            }
                        ],
                        "workout": [
                            {
                                "step": "Step 1",
                                "description": "Foam Rolling - Quads, Hamstrings, Calves, Back",
                                "sets": "1",
                                "reps": "30 seconds each",
                                "rest": "0 seconds"
                            },
                            {
                                "step": "Step 2",
                                "description": "Dynamic Stretching - Leg Swings, Lunge with Twist, Inchworms, Arm Circles",
                                "sets": "1",
                                "reps": "10 each",
                                "rest": "0 seconds"
                            },
                            {
                                "step": "Step 3",
                                "description": "Yoga Flow - Sun Salutation A, Sun Salutation B, Warrior 1, Warrior 2, Triangle Pose, Downward Dog",
                                "sets": "1",
                                "reps": "5 flows",
                                "rest": "0 seconds"
                            },
                            {
                                "step": "Step 4",
                                "description": "Cool-Down - 10 minutes light cardio on the Rower or Skierg",
                                "sets": "1",
                                "reps": "1",
                                "rest": "0 seconds"
                            }
                        ]
                    }
                ]
            }
        ]
    }
    )
}
import './QuestionCard.css';
import { useState, useEffect, useRef } from 'react';
import { getQuestions } from '../utils/data.js';

function QuestionCard(props) {

    const didMount = useRef(false);

    const [questionIndex, setQuestionIndex] = useState(0); //Initiate question index to 0 to start with first question
    const [questions, setQuestions] = useState([]); //Initiate question index to 0 to start with first question
    const [selection, setSelection] = useState(null);
    //const [submitted, setSubmitted] = useState(false);

    const updateInputs = props.setInputs;
    const updateStage = props.setStage;
    const inputs = props.inputs;

    //Updates the inputs state based on the question key
    const updateSelection = (e) => {
        setSelection(e.target.value);
    }
    
    //Advances the question after 'Next' is clicked                                   
    const handleClick = (e) => {
        e.preventDefault();

        //Update the state with input value
        updateInputs({...inputs, [questions[questionIndex].questionKey]: selection})

        //Need to check that question is answered before moving
        let index = questionIndex + 1;
        setQuestionIndex(index++);
    }

    //Handles submission of data when all questions are answqered
    const handleSubmit = (e) => {
        e.preventDefault();

        //Update the state with input value
        updateInputs({...inputs, [questions[questionIndex].questionKey]: selection});

        //Update the stage once all questions are answered
        updateStage('submitted');
    }

    //Get questions on component render
    useEffect(() => {
        setQuestions(getQuestions());
    },[])

    if(questions.length === 0){
        return (
            <div>
                <p>Sorry - something happened on our end</p>
            </div>
        )
    }
    return (
      <div className="card-container">
        <div className="card-header"> 
            <p className="AR">{questionIndex + 1}/{questions.length}</p>
        </div>
        <div onChange={updateSelection}>
            <label>{questions[questionIndex].question}</label>
            {questions[questionIndex].options.map((option, index) => {
                return(
                    <div className="options" key={index}>
                        <input 
                            type="radio"
                            name="answer"
                            value={option}
                            
                        ></input>
                        <label>{option}</label>
                    </div>
                )
            })}
            <button
                className="comp-right tertiary-button"
                onClick={(e) => {
                    if(questionIndex < questions.length-1){
                        handleClick(e);
                    }else{
                        handleSubmit(e);
                    } 
                }}
            >Next</button>
        </div>

      </div>
    );
  }
  
  export default QuestionCard;
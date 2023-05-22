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

        //Create array of selection for multiple
        if(questions[questionIndex].answer === 'multiple'){
            let input = '';

            if(e.target.checked){//add value if checked
                if(selection !== null){
                    input = [...selection, e.target.value] 
                }else{
                    input = [e.target.value]
                }
                
                setSelection(input)

            }else {//remove value if unchecked
                const arry = selection
                const index = arry.find(element => element === e.target.value);
                arry.splice(index, 1)
            }
            
            
            
        }else{ //Set selection to single value
            setSelection(e.target.value);
        }
    }
    
    //Advances the question after 'Next' is clicked                                   
    const handleNext = (e) => {
        e.preventDefault();

        //Update the state with input value
        updateInputs({...inputs, [questions[questionIndex].questionKey]: selection})

        //Need to check that question is answered before moving
        let index = questionIndex + 1;
        setQuestionIndex(index++);
        setSelection(null);
    }

    //Handles submission of data when all questions are answqered
    const handleSubmit = async (e) => {
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
            {
                questions[questionIndex].options.length > 0 &&
                questions[questionIndex].answer === 'multiple' &&
                typeof questions[questionIndex].options[0] === 'object' &&
                questions[questionIndex].options.map((category, index) => {
                    return (
                        <div key={index}>
                            <p>{category.category}</p>
                            {
                                category.options.map((option, index) => {
                                    return (
                                        <div 
                                            className="options" 
                                            key={index}
                                        >
                                            <input 
                                                type="checkbox"
                                                name="answer"
                                                value={option}
                                                
                                            ></input>
                                            <label>{option}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )        
                    
            })}
            {
                questions[questionIndex].options.length > 0 &&
                questions[questionIndex].answer === 'single' &&
                questions[questionIndex].options.map((option, index) => {
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
            {
                questions[questionIndex].options.length > 0 &&
                questions[questionIndex].answer === 'multiple' &&
                typeof questions[questionIndex].options[0] !== 'object' &&
                questions[questionIndex].options.map((option, index) => {
                    return(
                        <div className="options" key={index}>
                            <input 
                                type="checkbox"
                                name="answer"
                                value={option}
                                
                            ></input>
                            <label>{option}</label>
                        </div>
                    )
            })}
            {
                questions[questionIndex].options.length === 0 &&
                <div>
                    <input
                        type="text"
                        name="answer"
                        placeholder='1-12 weeks'
                    >
                    </input>
                </div>
            }
            <button
                className="comp-right tertiary-button"
                onClick={(e) => {
                    if(questionIndex < questions.length-1){
                        handleNext(e);
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
import './QuestionCard.css';
import { useState, useEffect, useRef } from 'react';
import { getQuestions } from '../utils/data.js';
import ListOption from './ListOption';

function QuestionCard(props) {

    const didMount = useRef(false);

    const [questionIndex, setQuestionIndex] = useState(0); //Initiate question index to 0 to start with first question
    const [questions, setQuestions] = useState([]); //Initiate question index to 0 to start with first question

    const updateInputs = props.setInputs;
    const updateStage = props.setStage;
    const inputs = props.inputs;

    //Updates the inputs state based on the question key
    const updateSelection = (e) => {

        if(questions[questionIndex].answer === 'multiple'){ //Create array of selection for multiple
             let input = ''; //initialize variable
 
             if(e.target.checked){//add value if checked
                
                 if(inputs[questions[questionIndex].questionKey]){
                     input = [...inputs[questions[questionIndex].questionKey], e.target.value] 
                 }else{
                     input = [e.target.value]
                 }
                 updateInputs({...inputs, [questions[questionIndex].questionKey]: input}) 
 
             }else {//remove value if unchecked
                 const arry = inputs[questions[questionIndex].questionKey]
                 const index = arry.indexOf(e.target.value);
                 arry.splice(index, 1)
 
                 updateInputs({...inputs, [questions[questionIndex].questionKey]: arry})
             }
         }else{ //Set selection to single value
             updateInputs({...inputs, [questions[questionIndex].questionKey]: e.target.value}) 
         }
     }

    const rangeChange = e => {
        updateInputs({...inputs, [questions[questionIndex].questionKey]: e.target.value}) 
    }
    

    //Advances the question after 'Next' is clicked                                   
    const handleNext = (e) => {
       e.preventDefault();
        
        //Need to check that question is answered before moving
        let index = questionIndex + 1;
        setQuestionIndex(index++);
        
    }

    //Handles submission of data when all questions are answqered
    const handleSubmit = async (e) => {
        e.preventDefault();

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
        
        <div className="input-container" onClick={updateSelection}>
            <label className='question'>{questions[questionIndex].question}</label>
            {
                questions[questionIndex].options.length > 0 &&
                questions[questionIndex].answer === 'multiple' &&
                typeof questions[questionIndex].options[0] === 'object' &&
                questions[questionIndex].options.map((category, index) => {
                    return (
                        <div key={index}>
                            <p >{`${category.category}:`}</p>
                            {
                                category.options.map((option, index) => {
                                    return (
                                        <div key={index}>
                                            <ListOption option={option} index={index} type='checkbox' />
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
                        <div key={index}>
                            <ListOption option={option} index={index} type='radio' />
                        </div>
                    )
            })}
            {
                questions[questionIndex].options.length > 0 &&
                questions[questionIndex].answer === 'multiple' &&
                typeof questions[questionIndex].options[0] !== 'object' &&
                questions[questionIndex].options.map((option, index) => {
                    return(
                        <div key={index}>
                            <ListOption option={option} index={index} type='checkbox' />
                        </div>
                    )
            })}
            {   
                questions[questionIndex].answer === 'range' &&
                <div className="range-container">
                    <div className="range-sub-container">
                        <label className="range-label">{questions[questionIndex].min}</label>
                        <input
                            type="range"
                            name="answer"
                            defaultValue={questions[questionIndex].min}
                            min={questions[questionIndex].min}
                            max={questions[questionIndex].max}
                            step={questions[questionIndex].step}
                            onChange={rangeChange}
                        >
                        </input>
                        <label>{questions[questionIndex].max}</label>
                    </div>
                    {
                        inputs[questions[questionIndex].questionKey] ? 
                        <p>{`${inputs[questions[questionIndex].questionKey]} ${questions[questionIndex].unit}`}</p> :
                        <p>{`0 ${questions[questionIndex].unit}`}</p>
                    }
                    
                </div>
            }
            {
                
                
            }
            
        </div>
        <div className="button-container">
            {
                inputs[questions[questionIndex].questionKey] &&
                <button
                    className="tertiary-button"
                    onClick={(e) => {
                        if(questionIndex < questions.length-1){
                            handleNext(e);
                        }else{
                            handleSubmit(e);
                        } 
                    }}
                >Next</button>
            }
        </div>
    </div>
    );
  }
  
  export default QuestionCard;
import './QuestionCard.css';
import { useState, useEffect, useRef } from 'react';
import { getQuestions } from '../utils/data.js';
import classNames from 'classnames';
import ListOption from './ListOption';

function QuestionCard(props) {

    const didMount = useRef(false);

    const [questionIndex, setQuestionIndex] = useState(0); //Initiate question index to 0 to start with first question
    const [questions, setQuestions] = useState([]); //Initiate question index to 0 to start with first question
    const [selection, setSelection] = useState(null);

    const minValue = 0;
    const maxValue = 7;

    const updateInputs = props.setInputs;
    const updateStage = props.setStage;
    const inputs = props.inputs;

    //Updates the inputs state based on the question key
    const updateSelection = (e) => {

       if(questions[questionIndex].answer === 'multiple'){ //Create array of selection for multiple
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

        console.log('updating inputs')
        console.log(inputs)

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
        <div onClick={updateSelection}>
            <label className='question'>{questions[questionIndex].question}</label>
            {
                questions[questionIndex].options.length > 0 &&
                questions[questionIndex].answer === 'multiple' &&
                typeof questions[questionIndex].options[0] === 'object' &&
                questions[questionIndex].options.map((category, index) => {
                    return (
                        <div key={index}>
                            <p >{category.category}</p>
                            {
                                category.options.map((option, index) => {
                                    return (
                                        <div>
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
                        <div>
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
                        <div>
                            <ListOption option={option} index={index} type='checkbox' />
                        </div>
                    )
            })}
            {
                questions[questionIndex].options.length === 0 &&
                <div>
                    <label>{minValue}</label>
                    <input
                        type="range"
                        name="answer"
                        defaultValue={minValue}
                        min={minValue}
                        max={maxValue}
                    >
                    </input>
                    <label>{maxValue}</label>
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
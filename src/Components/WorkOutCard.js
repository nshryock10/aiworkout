import { useEffect } from "react";

function WorkoutCard(props) {

    const inputs = props.inputs;
    const setStage = props.setStage;

    useEffect( () => {
        //console.log(inputs)
    }, [])

    /*
    old inputs
    {Object.entries(inputs).map(input => {
            return(
                <p>{input[1]}</p>
            )
        })}
    */

    return (
      <div >
        {props.workout !==null && 
            <p>{props.workout}</p>
        }
        <button 
            className="primary-button"
            onClick={()=>{setStage('question')}}
        >
            Restart
        </button>
      </div>
    );
  }
  
  export default WorkoutCard;
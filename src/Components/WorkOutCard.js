import { useEffect } from "react";

function WorkoutCard(props) {

    const inputs = props.inputs;
    const setStage = props.setStage;

    const handleClick = () => {

    }

    useEffect( () => {
        console.log(inputs)
    }, [])

    return (
      <div >
        {Object.entries(inputs).map(input => {
            return(
                <p>{input[1]}</p>
            )
        })}
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
import { useEffect } from "react";
import Week from './Week';

function WorkoutCard(props) {

    const inputs = props.inputs;
    const setStage = props.setStage;
    const workout = props.workout;

    useEffect( () => {
        //console.log(inputs)
    }, [])

    return (
      <div >
        {workout !== null && 
        workout.weeks !== null &&
            workout.weeks.map(week => {
                return(
                    <Week week={week} />
                )
            })
            
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
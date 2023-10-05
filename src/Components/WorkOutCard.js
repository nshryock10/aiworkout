import { useEffect, useState } from "react";
import Week from './Week';
import SelectMenu from "./SelectMenu";
import './WorkoutCard.css';

function WorkoutCard(props) {

    const setStage = props.setStage;
    const workout = props.workout;

    const [week, setWeek] = useState(1);

    useEffect( () => {
        //console.log(inputs)
    }, [])

    /*
workout.weeks.map(week => {
                return(
                    <Week week={week} weekNum={week}/>
                )
            })
    */

    return (
      <div className="workout-card" >
        {
            workout !== null && 
            workout.weeks !== null &&
            <SelectMenu weeks={workout.weeks.length} week={week} setWeek={setWeek} />
        }
        {
            workout !== null && 
            workout.weeks !== null &&
            <Week week={workout.weeks[week-1]}/>    
        }
        <button 
            className="secondary-button"
            onClick={()=>{setStage('question')}}
        >
            Get new workout
        </button>
      </div>
    );
  }
  
  export default WorkoutCard;
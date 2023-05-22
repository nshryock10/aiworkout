import { useEffect } from "react";

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
            <div>
                {workout.weeks.map(week => {
                    return(
                        <div>
                            <h2>{` Week ${week.week}`}</h2>
                            {week.days.map(day => {
                                return(
                                    <div>
                                        <h3>{`Day ${day.day}`}</h3>
                                        <p>{day.description}</p>
                                        <br/>
                                        <p>Warm-up:</p>
                                        {day.warmup.map(movement => {
                                            return(
                                                <div>
                                                    <h4>{movement.description}</h4>
                                                    <span>{`Sets: ${movement.sets} `}</span>
                                                    <span>{`Reps: ${movement.reps}`}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
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
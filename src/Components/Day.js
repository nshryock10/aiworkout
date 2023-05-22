import React from 'react';
import './Day.css'
import Movement from './Movement';

function Day(props) {

    const day = props.day;
    return (
        <div>
            <h3>{`Day ${day.day}`}</h3>
            <p>{day.description}</p>
            <p>Warm-up:</p>
            {day !== null &&
            day.warmup.map(movement => {
                return(
                    <Movement movement={movement} />
                )
            })}
            <p>Workout:</p>
            {day !== null &&
            day.workout.map(movement => {
                return(
                    <Movement movement={movement} />
                )
            })}
        </div>
            
    )
}

export default Day;
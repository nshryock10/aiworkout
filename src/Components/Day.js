import React from 'react';
import './Day.css'
import Movement from './Movement';

function Day(props) {

    const day = props.day;
    const index = props.index;

    return (
        <div key={index} className='day-card' >
            <div className='day-label'>
                <h3>{`${day.day}: `}</h3>
                <h3>{day.description}</h3>
            </div>
            <div className='workout-section'>
                <p>Warm-up:</p>
                {day !== null &&
                day.warmup.map((movement, index) => {
                    return(
                        <Movement movement={movement} key={index} />
                    )
                })}
                <p>Workout:</p>
                {day !== null &&
                day.workout.map(movement => {
                    return(
                        <Movement movement={movement} key={index}/>
                    )
                })}
            </div>
            
        </div>
            
    )
}

export default Day;
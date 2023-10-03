import React from 'react';
import './Day.css'
import Movement from './Movement';
import { ChevronDown } from 'react-bootstrap-icons';
import classNames from 'classnames';
import { useState } from 'react';

function Day(props) {

    const day = props.day;
    const index = props.index;

    const [chevOpen, setChevOpen] = useState(false);

    const active = classNames('chev-button', {
        open: chevOpen,
    })

    const displayWorkout = classNames('workout', {
        open: chevOpen,
    })
   if(!day){
    return (
        <div>
            <p>Error on our end. Refresh and try again</p>
        </div>
    )

   }else{
    return (
        <div key={day} className='day-card' >
            <div className='day-bar'>
                <div className='day-label'>
                    <h3>{`${day.day}: `}</h3>
                <h3>{day.description}</h3>
                </div>
                
                <button
                    className={active}
                    onClick={() => {
                        setChevOpen((chevOpen) => !chevOpen)
                    }}
                >
                    <ChevronDown className='chev-down'/>
                </button>
                
            </div>
            <div className={displayWorkout}>
                <p className='section-header'>Warm-up:</p>
                {day !== null &&
                day.warmup.map((movement, index) => {
                    return(
                        <Movement movement={movement} key={index} />
                    )
                })}
                <p className='section-header' >Workout:</p>
                {day !== null &&
                day.workout.map(movement => {
                    return(
                        <Movement movement={movement} key={index}/>
                    )
                })}
            </div>
            
        </div>
            
    )}
}

export default Day;
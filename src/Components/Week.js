import React from 'react';
import './Week.css'
import Day from './Day';

function Week(props) {

    const week = props.week;

    return (
        <div>
            {week !== null && 
                week.days.map(day => {
                    return(
                        <Day day={day} />
                    )
                })}
        </div>
    )
}

export default Week;
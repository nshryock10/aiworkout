import React from 'react';
import './Week.css'
import Day from './Day';

function Week(props) {

    const week = props.week;
    if(week){
    return (
        <div>
            {week !== null && 
                week.days.map((day, index) => {
                    return(
                        <Day day={day} key={index} />
                    )
                })}
        </div>
    )
    }else{
        return (
            <div>
                <p>Error on our end. Refresh and try again</p>
            </div>
        )
    }
}

export default Week;
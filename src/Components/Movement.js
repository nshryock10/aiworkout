import React from 'react';
import './Movement.css'

function Movement(props) {

    const movement = props.movement;
    if(movement){
    return (
        <div>
            <p>{`${movement.step}) `}</p>
            <p>{movement.description}</p>
            
            <span>{`Sets: ${movement.sets} `}</span>
            <span>{`Reps: ${movement.reps}`}</span>
               
        </div>
            
    )}else{
        return(
            <div>
                <p>No movement...</p>
            </div>
        )
    }
}

export default Movement;
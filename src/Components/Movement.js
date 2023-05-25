import React from 'react';
import './Movement.css'

function Movement(props) {

    const movement = props.movement;
    if(movement){
    return (
        <div className='movement-box'>

            <div className='movement-description'>
                <span className='step'>{`${movement.step}: `}</span>
                <span>{movement.description}</span>
            </div>
            <div className="sets-reps">
               <span className='sets' >{`Sets: ${movement.sets} `}</span>
                <span className='reps' >{`Reps: ${movement.reps}`}</span> 
            </div>
    
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
import { useEffect } from "react";

function WorkoutCard(props) {

    const inputs = props.inputs;

    useEffect( () => {
        console.log(inputs)
    }, [])

    return (
      <div >
        {Object.entries(inputs).map(input => {
            return(
                <p>{input[1]}</p>
            )
        })}
      </div>
    );
  }
  
  export default WorkoutCard;
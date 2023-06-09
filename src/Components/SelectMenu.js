
import React, { useEffect, useState } from 'react';
import './SelectMenu.css'

function SelectMenu(props) {

    const weeksLength = props.weeks;
    const week = props.week;
    const setWeek = props.setWeek;
    const [weeks, setWeeks] = useState([])

    const handleSelection = (value) => {
        setWeek(value);
    }

    useEffect(() => {
        let arry = [];
        for(let i=0; i < weeksLength; i++){
            arry.push(i+1)
        }
        setWeeks(arry)
    }, [])

    return (
        <div>
            {weeks.length > 0 &&
                <select
            value={week}
            className="select-dropdown"
            onChange={(e) => {handleSelection(e.target.value)}}
          >
            
            {weeks.map((week, index) => 
                <option 
                    key={index}
                    value={week}
                >
                  {`Week ${week}`}
                </option>
            )}
        </select>}
        </div>
        
            
    )
}

export default SelectMenu;


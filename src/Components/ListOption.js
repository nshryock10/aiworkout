import './ListOption.css'

function ListOption(props) {

    return (
        <div className="options" key={props.index} >
            <input
                value={props.option}
                type={props.type}
                name='input'
                className='radio-btn'
            />
            <label className='radio-label' >{props.option}</label>
        </div>
        
    );
  }
  
  export default ListOption;
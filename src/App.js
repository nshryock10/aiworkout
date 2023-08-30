import { useEffect, useState } from 'react';
import './App.css';
import Nav from './Components/Nav';
import QuestionCard from './Components/QuestionCard';
import WorkoutCard from './Components/WorkOutCard';
import Loading from './Components/Loading';
import { getWorkout } from './api/api';
import { getPrompt, getWorkoutData } from './utils/data';

function App() {

  const [inputs, setInputs] = useState({});
  const [stage, setStage] = useState('question');
  const [isLoading, setIsLoading] = useState(false);
  const [workout, setWorkout] = useState(null);

  //Uncomment when done with layout
  useEffect(() => {
    if(stage === 'submitted'){
      setIsLoading(true)
      const prompt = getPrompt(inputs);
      const response = callAPI(prompt);
    }
  }, [stage]);


/*
  //This block is just for workout card dev
  useEffect(() => {
    if(stage === 'submitted'){
      console.log(inputs)
    }
    convertJson()
  }, [stage])
  

  const convertJson = async () => {
    const workData = await getWorkoutData();
    //const jsonData = await workData.json();
    //const data = await JSON.parse(workData);
    setWorkout(workData);
    setStage('question')
  }
*/
  //-----------------------------------

  const callAPI = async (prompt) => {
    const response = await getWorkout(prompt);
    console.log(response)
    
    if(response.status && response.status !==200){
    
      console.log(response)
      setWorkout(`${response.status} error. ${response.statusText}`)
      setStage('error')
      //setWorkout(`${response.status} error. Something went wrong on our end`)
      setIsLoading(false);
    
    }else{
      
      try{
        const myObj = await JSON.parse(response[0].content);
        setWorkout(myObj)
        setIsLoading(false);
        console.log(response[0].content)
      }catch(err){
        console.log(err)
        setStage('error')
        setWorkout(response[0].content);
        setIsLoading(false);
        console.log(response[0].content)
      }
      
    }
  }

  return (
    <div className="App">
      <Nav />
      {stage==='question' && 
      <QuestionCard 
        setStage={setStage}
        setInputs={setInputs}
        inputs={inputs}
      />} 
      { stage==='submitted' &&
        isLoading===false &&
        <WorkoutCard 
          inputs={inputs}
          workout={workout}
          setStage={setStage}
        />
      }
      {
        stage === 'error' && 
        <div>
          <p>{workout}</p>
        </div>
      }
      { stage==='submitted' &&
        isLoading===true &&
        <Loading />
      }
    </div>
  );
}

export default App;

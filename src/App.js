import { useEffect, useState } from 'react';
import './App.css';
import Nav from './Components/Nav';
import QuestionCard from './Components/QuestionCard';
import WorkoutCard from './Components/WorkOutCard';
import Loading from './Components/Loading';
import { getWorkout } from './api/api';

function App() {

  const [inputs, setInputs] = useState({});
  const [stage, setStage] = useState('question');
  const [isLoading, setIsLoading] = useState(false);
  const [workout, setWorkout] = useState(null);

  useEffect(() => {
    if(stage === 'submitted'){
      setIsLoading(true)
      console.log("Loading")
      const prompt = `Give me a ${inputs.experience}-level workout that lasts ${inputs.days} day(s) per week`;
      const response = callAPI(prompt);
    }
  }, [stage]);

  const callAPI = async (prompt) => {
    const response = await getWorkout(prompt);

    console.log(response)
    setWorkout(response[0].content)
    setIsLoading(false);
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
      { stage==='submitted' &&
        isLoading===true &&
        <Loading />
      }
    </div>
  );
}

export default App;

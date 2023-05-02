import { useEffect, useState } from 'react';
import './App.css';
import Nav from './Components/Nav';
import QuestionCard from './Components/QuestionCard';
import WorkoutCard from './Components/WorkOutCard';

function App() {

  const [inputs, setInputs] = useState({});
  const [stage, setStage] = useState('question');

  return (
    <div className="App">
      <Nav />
      {stage==='question' ? 
      <QuestionCard 
        setStage={setStage}
        setInputs={setInputs}
        inputs={inputs}
      /> :
      <WorkoutCard 
        inputs={inputs}
      />}
    </div>
  );
}

export default App;

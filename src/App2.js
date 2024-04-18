import { useEffect, useState } from 'react';
import './App.css';
import Nav from './Components/Nav';
import QuestionCard from './Components/QuestionCard';
import WorkoutCard from './Components/WorkOutCard';
import Loading from './Components/Loading';
import { getWorkout, checkServer } from './api/api';
import { getPrompt, getWorkoutData } from './utils/data';
import {io} from 'socket.io-client'
import { response } from 'express';

function App2() {

  const [inputs, setInputs] = useState({});
  const [stage, setStage] = useState('question'); //change to question for production
  const [isLoading, setIsLoading] = useState(false);
  const [workout, setWorkout] = useState(null);
  const [message, setMessage] = useState('Working on your request...')


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
    //setStage('question')
  }
*/
  //----------------------------------- 

  useEffect(() => {

    if(stage === 'submitted'){
        setIsLoading(true); 
        const dev_URL = 'http://localhost:3000';
        const prod_URL = 'https://fiit-8a6ab7670425.herokuapp.com';
        const prod_URL2 = 'https://app.tryfiit.com';
        const prod_URL3 = 'https://aiworkout-ruby.vercel.app';
        const socket = io(prod_URL3);//Add final socket server URL
        socket.on('connect', () => console.log(socket.id));
        socket.on('connect_error', ()=>{
            console.log('error in socket')
            console.log(socket)
            setTimeout(()=> socket.connect(), 5000)
        })
        
        const prompt = getPrompt(inputs);
        const response = callAPI2(prompt);

        socket.on('finish', async (status, data)=>{
            try{
                console.log(status, data);  
                const myObj = await JSON.parse(data[0].content);
                setWorkout(myObj)
                setIsLoading(false);
            }catch(err){
                console.log(err)
                setStage('error')
                setWorkout(data[0].content);
                setIsLoading(false);
                console.log(data[0].content)
            }
        })

    }

  }, [stage])

  useEffect(() => {

    checkServer()

  }, [])

  const checkServer = async () => {
    const check = await checkServer()
    console.log(check)
  }


  const callAPI2 = async (prompt) => {
    const response = await getWorkout(prompt);
    return response
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
        <Loading message={message} />
      }
    </div>
  );
}

export default App2;

import { useEffect, useState } from 'react';
import './App.css';
import Nav from './Components/Nav';
import QuestionCard from './Components/QuestionCard';
import WorkoutCard from './Components/WorkOutCard';
import Loading from './Components/Loading';
import { getWorkout } from './api/api';
import { getPrompt, getWorkoutData } from './utils/data';
import {io} from 'socket.io-client'

function App2() {

  const [inputs, setInputs] = useState({});
  const [stage, setStage] = useState('question');
  const [isLoading, setIsLoading] = useState(false);
  const [workout, setWorkout] = useState(null);
  const [message, setMessage] = useState('Working on your request...')

  //Non-socket.io implementation
 /* useEffect(() => {
    if(stage === 'submitted'){
      setIsLoading(true)
      const prompt = getPrompt(inputs);
      const response = callAPI(prompt);
    }
  }, [stage]);
*/
  //--- Section below is for socket.io implementation ---//

  /*useEffect(() => {
    if(isLoading){
        let count = 0;
        const msgAry = ['This may take a minute', 'I promise your workout is coming', 'The wait is almost over...']
        setInterval(() => {
            setMessage(`Let's ${count}`);
        }, 5000)
    }

  }, [isLoading])
*/
  useEffect(() => {

    if(stage === 'submitted'){
        setIsLoading(true); 
        const dev_URL = 'http://localhost:3000';
        const prod_URL = 'https://fiit-8a6ab7670425.herokuapp.com';
        const socket = io();//Add final socket server URL
        socket.on('connect', ()=> console.log(socket.id));
        socket.on('connect_error', ()=>{
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

  const callAPI2 = async (prompt) => {
    const response = await getWorkout(prompt);
    return response
  }

  //----------------------------------------------------//

  const callAPI = async (prompt) => {
    const response = await getWorkout(prompt);
    console.log(response)
    
    if(response.status && response.status !==200){
    
      console.log(response)
      setWorkout(`${response.status} error. ${response.statusText}`)
      setStage('error')
      //setWorkout(`${response.status} error. Something went wrong on our end`)
      setIsLoading(false);
    
    }else if(response.status && response.status == 201){
      

    } else{
      
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
        <Loading message={message} />
      }
    </div>
  );
}

export default App2;

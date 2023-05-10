export const API_ENDPOINT = "http://localhost:3000"; //Uncomment in Prod

export const getWorkout = async (prompt) => {
    try{
    const response = await fetch(`${API_ENDPOINT}/chat`, {
        method: "POST",
        body: JSON.stringify({
            message: prompt
        }),
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin" : "*", 
            "Access-Control-Allow-Credentials" : true 
          }
    })
    if(response){
        if(response.status !== 200){
            return response
        }else{
            return await response.json();
        }
        
    }}catch(err){
        console.log(err);
    }
}

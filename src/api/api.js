export const API_ENDPOINT = "http://localhost:3000"; //Uncomment in Prod
export const AWS_ENDPOINT = "https://a8jukcsjq9.execute-api.us-east-1.amazonaws.com/dev";
export const HER_ENDPOINT = "https://fiit-8a6ab7670425.herokuapp.com"

export const getWorkout = async (prompt) => {
    try{
    const response = await fetch(`${HER_ENDPOINT}/chat`, {
        method: "POST",
        body: JSON.stringify({
            message: prompt
        }),
        // this works on chatGPT but preventing AWS req
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin" : "*", 
            "Access-Control-Allow-Credentials" : "*",
            //"Access-Control-Allow-Headers": "*" 
          }
          
    })
    if(response){
        if(response.status !== 200){
            return response
        }else{
            const workout = await response.json();
            return workout;
        }
        
    }}catch(err){
        console.log(err);
    }
}

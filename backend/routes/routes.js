require('dotenv').config();
const express = require('express');
const router = express.Router();
const OpenAI = require('openai');

/*const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
}) */
const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

router.get("/", (req, res, next) => {
    res.send("Let em know, we back up");
})

router.get("/test", (req, res, next) => {
    res.status(200).send('server running')
})

router.get('/chat', (req, res) => {
    res.status(200).send('we got it')
})

router.post("/chat", async (req, res, next) => {
   const message = req.body.message;
    try{
    //send a status that the request was accepted while we wait
    res.status(202).send('Working on your request');

    //ping chatGPT api
    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: message}],
    });
    console.log(completion)
    
    req.io.sockets.emit('finish', 200, [completion.data.choices[0].message, completion.data.choices[0].finish_reason]);
    //res.status(200).send([completion.data.choices[0].message, completion.data.choices[0].finish_reason])
    
    }catch(error){
        console.log(error)
        //console.log(error.response.status)
        res.status(error.response.status || 500).send(error.response.statusText)
    }

    
})


module.exports = router;
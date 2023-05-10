require('dotenv').config();
const express = require('express');
const router = express.Router();
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration);

router.get("/", (req, res, next) => {
    res.send("Let em know, we back up");
})

router.post("/chat", async (req, res, next) => {
   const message = req.body.message;
    try{
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: message}],
    });
    
    res.status(200).send([completion.data.choices[0].message, completion.data.choices[0].finish_reason])
    
    }catch(error){

        console.log(error.response.status)
        res.status(error.response.status || 500).send(error.response.statusText)
    }

    
})


module.exports = router;
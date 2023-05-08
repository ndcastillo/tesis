const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

let buffer;
app.use(express.json());

app.listen(PORT, ()=>{
    console.log(`El puerto es ${PORT}`)
})

app.get('/webhook',(req,res)=>{
    
    console.log(req.body)

    buffer = req.body;
    res.status(200).send({
        "timestamp": req.body.timestamp,
        "data": req.body.data
    });

});

app.get('/datos', (req,res)=>{
    res.status(200).send(buffer);
})

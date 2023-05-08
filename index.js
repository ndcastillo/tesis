const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, ()=>{
    console.log(`El puerto es ${PORT}`)
})

app.get('/webhook',(req,res)=>{
    
    console.log(req.body)

    res.status(200).send({
        "timestamp": req.body.timestamp,
        "data": req.body.data
    });

});

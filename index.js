const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, ()=>{
    console.log(`El puerto es ${PORT}`)
})

app.get('/webhook',(req,res)=>{
    // RECEPTOR
    console.log(req)
    
    res.status(200).send({
        "Prueba":"Ademas",
        "Recibido": "0"
    });

    // res.status(200).send({
    //     "Prueba":"Prueba - Tambien"
    // })
});

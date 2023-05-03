const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, ()=>{
    console.log(`El puerto es ${PORT}`)
})

app.get('/webhook',(req,res)=>{
    // Cambiar la petición no por HTTP sino por MQTT, de momento lo dejamos asi.
    console.log(req)

    res.status(200).send({
        "Prueba":"Ademas",
        "Recibido": req.body
    });

    // res.status(200).send({
    //     "Prueba":"Prueba - Tambien"
    // })
});

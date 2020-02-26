require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    const body = req.body;
    res.json({persona: body});
});


app.listen(process.env.PORT, ()=>{
    console.log(`Escuchando servicios rest en puerto ${process.env.PORT}`);
    
})
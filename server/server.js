require('./config/config');

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// ================================
// Rutas
// ===================================
const routeUser = require('./routes/user');


//Miderwer de rutas
app.use('/api',routeUser);


// ===============================
// Conexion a base de datos
//==================================
 mongoose.connect(process.env.URLDB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
},(err)=>{
    if(err) throw new err;
    console.log('Base de datos online');
    
});
app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});
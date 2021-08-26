// para correr el index.js en la terminal con: node index.js 

const express = require('express');
require('dotenv').config();
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Configuracion de cors
app.use( cors() );

// Base de datos;
dbConnection();
// mean_user
// AsDkEBY5NHHBOInY

// para ver todas las variables
// console.log( process.env );

// Rutas
app.get( '/', (req, res) => {

  res.json({
    ok: true,
    msg: 'Hola Mundo'
  })

});


app.listen( process.env.port, () => {
  console.log('Servidor corriendo en puerto ' + process.env.port);
})
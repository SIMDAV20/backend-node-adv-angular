// para correr el index.js en la terminal con: node index.js 

const express = require('express');
require('dotenv').config();
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Configuracion de cors
app.use( cors() );

// Lectura y parseo del body
app.use( express.json() );

// Base de datos;
dbConnection();
// mean_user
// AsDkEBY5NHHBOInY

// Directorio Público
app.use( express.static('public') );

// para ver todas las variables
// console.log( process.env );

// Rutas
app.use( '/api/usuarios', require('./routes/usuarios') );
app.use( '/api/hospitales', require('./routes/hospitales') );
app.use( '/api/medicos', require('./routes/medicos') );
app.use( '/api/login', require('./routes/auth') );
app.use( '/api/todo', require('./routes/busqueda') );
app.use( '/api/upload', require('./routes/uploads') );


// app.get( '/', (req, res) => {

//   res.json({
//     ok: true,
//     msg: 'Hola Mundo'
//   })

// });


app.listen( process.env.port, () => {
  console.log('Servidor corriendo en puerto ' + process.env.port);
})
//Servidor
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

//Activar uso de variables de entorno
require("dotenv").config();

//Path de archivo publico
const path = require('path')

//Midleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//Controladores
// app.use('ruta de controladores')

//Whenever someone connects this gets executed
io.on('connection', function(socket) {
    console.log('A user connected');
 
    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', function () {
       console.log('A user disconnected');
    });
 });

const PORT = process.env.PORT || 3000

server.listen(PORT, function() {
    console.log('Escuchando en el puerto *:', PORT);
 });

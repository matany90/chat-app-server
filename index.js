const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('new connection')

    socket.on('join', ({ name, room }, errorCb) => {
        console.log(name, room)
    })

    socket.on('disconnect', () => console.log('user had left'))
})
require('./routes/chatRouter')(app);
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
//   })

server.listen(PORT);
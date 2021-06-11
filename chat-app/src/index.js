const express  = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath));

let count = 0;

io.on('connection', (socket) =>{
    console.log('A user is connected');
    socket.emit('countUpdated', count);
    socket.on('increment',() =>{
        count++
       // socket.emit('countUpdated', count); // emits to specific connection
          io.emit('countUpdated', count);     //emits to all connected users
    })
})

server.listen(port, () =>{
    console.log(`Server is up and running in port ${port}`)
});
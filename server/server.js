const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

  // socket.on('createEmail', (newEmail) => {
  //   console.log('createEmail', newEmail);
  // })


  socket.on('createLocationMessage', (coords) => {
    console.log('coords:',coords);
    io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
  });

  socket.on('createMessage', (msg, callback) => {
    console.log('createMessage', msg);

    io.emit('newMessage', generateMessage(msg.from, msg.text));
    callback();
    // socket.broadcast.emit('newMessage', {
    //   from: msg.from,
    //   text: msg.text,
    //   createAt: new Date().getTime()
    // });
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from client');
  });
});


server.listen(port, () => {
  console.log(`The server is up on port ${port}`);
});

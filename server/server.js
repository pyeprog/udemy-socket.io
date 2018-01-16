const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {
    from: 'Admin',
    text: 'Welcome to the chatroom',
    createAt: new Date().getTime()
  });

  socket.broadcast.emit('newMessage', {
    from: 'Admin',
    text: 'Someone have come the chatroom',
    createAt: new Date().getTime()
  })

  socket.on('createEmail', (newEmail) => {
    console.log('createEmail', newEmail);
  })

  socket.on('disconnect', () => {
    console.log('Disconnected from client');
  });

  socket.on('createMessage', (msg) => {
    console.log('createMessage', msg);

    // io.emit('newMessage', {
    //   from: msg.from,
    //   text: msg.text,
    //   createAt: new Date().getTime()
    // })
    // socket.broadcast.emit('newMessage', {
    //   from: msg.from,
    //   text: msg.text,
    //   createAt: new Date().getTime()
    // });
  });
});


server.listen(port, () => {
  console.log(`The server is up on port ${port}`);
});

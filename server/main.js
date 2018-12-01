let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

let users=[];
let chat=[];

io.on('connection', (socket) => {
  // Log whenever a user connects
  console.log('user connected');

  // Log whenever a client disconnects from our websocket server
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  // when we receive a 'message' event from our client, print out
  // the contents of that message and then echo it back to our client
  // using 'io.emit()'
  socket.on('message', (message) => {
    var msg = JSON.parse(message);
    console.log("Message received: " + " Message - " + msg.message + " Type: " + msg.type);

    // switch (msg.type) {
    //   case 'user-typing':
    //   io.emit('message', {type: 'user-typing', text: message});
    //     break;

    //   case 'chat-message':
    //   console.log('Received chat-mesage', msg);
    //   io.emit('message', {type: 'chat-message', text: message});
    //     break;

    //   default:
    //     break;
    // }
  });

  socket.on('chat-message', (message) => {
    io.emit('chat-message', message);
    console.log('received chat-message: ', message);
  });

});

// Initialise our websocket server on port 5000
http.listen(5000, () => {
  console.log('server listening for messages on port 5000');
});

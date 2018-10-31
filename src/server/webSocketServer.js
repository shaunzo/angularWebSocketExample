"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
var ws_1 = require("ws");
var app = express();
// Point express to where the html files are located with the static and join function
app.use('/', express.static(path.join(__dirname, '..', 'client')));
app.use('/node_modules', express.static(path.join(__dirname, '..', 'node_modules')));
// HTTP Server - we do a get here that points to a default file to retrieve just for testing purposes
app.get('/', function (req, res) {
    res.sendfile(path.join(__dirname, '..', 'client/simple-websocket-client.html'));
});

// App is listening on port 8000
var httpServer = app.listen(8000, 'localhost', function () {
    var port = httpServer.address().port;
    console.log('HTTP server is listening on: ', port);
});

// WebSocket server
var wsServer = new ws_1.Server({ port: 8085 });
console.log('WebSocket server is listening on port 8085');
wsServer.on('connection',

// When angular makes a connection to the websocket server send a message
function (websocket) {
    // websocket.send('{ServerMessage: "This message was pushed by the WebSocket server"}');
    // When the client send a message respond with a message showing the date
    websocket.on('message', function (message) {
        console.log('Server received: ', message);

        websocket.send([{message}]);


        // var todaysDate = new Date();
        // websocket.send('date pushed by server: ' + todaysDate.toString());
    });
});
// run "tsc webSocketServer.ts" to transpile down to ES5

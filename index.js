var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(request, response) {
    response.send('Welcome to BLVDIA.');
});

io.on('connection', function(socket) {
    socket.on('shutter', function(msg) {
        io.emit('shutter', msg);
    });
    socket.on('snap', function(msg) {
        io.emit('snap', msg);
    });
    socket.on('complete', function(msg) {
        io.emit('complete', msg);
    });
    socket.on('preview', function(msg) {
        io.emit('preview', msg);
    });
    socket.on('preview-complete', function(msg) {
        io.emit('preview-complete', msg);
    });
});

http.listen(process.env.PORT || 5000, function() {
    console.log('listening on *:5000');
});
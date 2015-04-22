var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(request, response) {
  response.send('Welcome to BLVDIA.');
});

io.on('connection', function(socket){
  socket.on('shutter', function(msg){
    io.emit('shutter', msg);
  });
});

http.listen(process.env.PORT || 5000, function(){
  console.log('listening on *:5000');
});
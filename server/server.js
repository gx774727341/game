var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// app.use(express.static(__dirname + '/public'));


io.on('connection', function(socket){

	console.log('this is connection',socket.id);

	socket.emit('connected123', '你可真是个傻逼');
});

// io.on('connect', function(socket){

// 	console.log('this is connect',socket.id);

// 	socket.emit('connected123', 'connect');
// });



http.listen(3000, function(){
	console.log('listen on : 3000');
});
var app = require('express')();
var server = require('http').createServer(app);
// http server를 socket.io server로 upgrade한다
var io = require('socket.io')(server);

// localhost:3000으로 서버에 접속하면 클라이언트로 index.html을 전송한다
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

server.listen(3000, function() {
    console.log('Socket IO server listening on port 3000');
});

io.on('connection', function(socket) {
   console.log('connect:::');
    socket.on('request', function(data){
        console.log('call:: request', data);
        socket.emit('request','hi:: kkk');
    });
});


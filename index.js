var createGame = require('./game');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var nextUserID = 1;
var users = {};
var game = createGame();

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('total no cards is:');
  console.log(game.deck.cards.length);
  var id = nextUserID;
  users[id] = {
    nickname: 'user' + id
  };
  socket.userId = id;
  nextUserID++;
  socket.broadcast.emit('user_connected', users[socket.userId.toString()]);
  socket.emit('game_update', game);

  socket.on('disconnect', function(){
    io.emit('user_disconnected');
  });

  socket.on('chat_message', function (msg) {
    var user = users[socket.userId.toString()];
    if (msg.indexOf('/nick ') === 0) {
      var newNick = msg.replace('/nick ', '');
      msg = user.nickname + ' changed nick to ' + newNick;
      user.nickname = newNick;
    }
    var data = {user: user, msg: msg};
    io.emit('chat_message', data);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
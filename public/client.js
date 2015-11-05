var socket = io();
$('form').submit(function () {
  socket.emit('chatmessage', $('#m').val());
  $('#m').val('');
  return false;
});

socket.on('game_update', function(game){
  game.deck.cards.forEach(function(card){
    $('#game').append('<div class="card">'
      + ' Fill: ' + card.fill
      + ' Color: ' + card.color
      + ' Number: ' + card.number
      + ' Shape: ' + card.shape
      +'</div>');
  });
});

socket.on('user_connected', function(user){
  $('#messages').append('<li>' + '* ' + user.nickname + ' connected *' + '</li>');
});

socket.on('user_disconnected', function(){
  $('#messages').append('<li>' + '* a user disconnected *' + '</li>');
});

socket.on('chat_message', function(data){
  $('#messages').append('<li>' + data.user.nickname + ': ' + data.msg + '</li>');
});
var socket = io();
$('form').submit(function () {
  socket.emit('chatmessage', $('#m').val());
  $('#m').val('');
  return false;
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
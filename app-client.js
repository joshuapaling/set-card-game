var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var APP = require('./components/APP');
var Board = require('./components/Board');
var Whoops404 = require('./components/Whoops404');

var routes = (
  <Route handler={APP}>
    <DefaultRoute handler={Board} />
    <NotFoundRoute handler={Whoops404} />
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler />, document.getElementById('react-container'));
});

var io = require('socket.io-client');
var socket = io();

// CHat example
$('form').submit(function () {
  socket.emit('chat_message', $('#m').val());
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
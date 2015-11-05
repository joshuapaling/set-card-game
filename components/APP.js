var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var io = require('socket.io-client');
var Header = require('./parts/Header');

var APP = React.createClass({

    getInitialState() {
        return {
            status: 'disconnected',
            title: '',
            game: {deck: { cards: []}},
        }
    },

    componentWillMount() {
        this.socket = io('http://localhost:3000');
        this.socket.on('connect', this.connect);
        this.socket.on('disconnect', this.disconnect);
        this.socket.on('game_update', this.gameUpdate);
    },

    connect() {
        this.setState({ status: 'connected' });
    },

    disconnect() {
        this.setState({ status: 'disconnected' });
    },

    gameUpdate(serverState) {
        console.log('got here');
        console.log(serverState);
        this.setState({ game: serverState });
    },

    render() {
        return (
            <div>
                <Header title={this.state.title} status={this.state.status} />
                <RouteHandler {...this.state} />
            </div>
        );
    }

});

module.exports = APP;
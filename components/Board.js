var React = require('react');
var Card = require('./parts/Card');

var Board = React.createClass({
  render() {
    if (!this.props.game) {
      return <div></div>;
    }

    var cards = [];
    this.props.game.deck.cards.forEach(function(card){
      cards.push(
        <Card card={card} />
      );
    });
    return(<div>{cards}</div>);
  }
});

module.exports = Board;

var React = require('react');

var Board = React.createClass({
  render() {
    if (!this.props.game) {
      return <div></div>;
    }
    var cards = [];
    this.props.game.deck.cards.forEach(function(card){
      cards.push(
        <div className="card">
          Fill: {card.fill} <br />
          Color: {card.color} <br />
          Number: {card.number} <br />
          Shape: {card.shape} <br />
        </div>
      );
    });
    return(<div>{cards}</div>);
  }
});

module.exports = Board;

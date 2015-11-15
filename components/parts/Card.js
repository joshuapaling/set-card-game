var React = require('react');

var Card = React.createClass({
  render() {
    var shapes = [];
    var theShape;
    var classes = 'shape ' + this.props.card.shape;

    var oval = (
      <svg viewBox="-3 -4 115 64">
        <path className={classes} stroke="black" stroke-width="4" stroke-linejoin="miter" fill="none"
          d="M30 0
             L80,0
             C120,0 120,50 80,50
             L30 50
             C-10,50 -10,0 30,0
             " />
      </svg>
    );

    var squiggle = (
      <svg viewBox="-3 -4 115 64">
        <path className={classes} stroke="black" stroke-width="4" stroke-linejoin="miter" fill="none"
          d="M0 30
             C0,0 33,0 50,12
             S70,20 85,8
             S105,10 103,26
             S90,70 60,45
             S30,50 16,55
             S00,40 0,30
             " />
      </svg>
    );

    var diamond = (
      <svg width="100" height="60" viewBox="-5 -4 115 64">
        <path className={classes} stroke-width="4" stroke-linejoin="miter" d="M0 30 L50 0 L100 30 L50 60 Z" />
      </svg>
    );

    if (this.props.card.shape === 'squiggle') {
      theShape = squiggle;
    } else if (this.props.card.shape === 'diamond') {
      theShape = diamond;
    } else {
      theShape = oval;
    }

    for (var i = 1; i <= this.props.card.number; i++) {
      shapes.push(theShape);
    }

    var classes = `card ${this.props.card.fill} ${this.props.card.color} ${this.props.card.shape}`
    return(
      <div className={classes}>
        Fill: {this.props.card.fill} <br />
        Color: {this.props.card.color} <br />
        Number: {this.props.card.number} <br />
        Shape: {this.props.card.shape} <br />
        {shapes}
      </div>
    );
  }
});

module.exports = Card;

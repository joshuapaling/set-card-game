module.exports = function deck() {
  var cards = [];
  [1,2,3].forEach(function(number){
    ['diamond', 'squiggle', 'oval'].forEach(function(shape){
      ['solid', 'striped', 'open'].forEach(function(fill){
        ['red', 'green', 'purple'].forEach(function(color){
          cards.push({
            number: number,
            shape: shape,
            fill: fill,
            color: color
          });
        });
      });
    });
  });

  return {
    cards: cards
  };
};

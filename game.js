var createDeck = require('./deck');

module.exports = function createGame() {
  var deck = createDeck();
  deck.shuffle();
  return {
    deck: deck
  };
};
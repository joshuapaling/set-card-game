var createDeck = require('./deck');
console.log('deck is:');
console.log(createDeck);
module.exports = function createGame() {
  var deck = createDeck();
  deck.shuffle();
  return {
    deck: deck
  };
};
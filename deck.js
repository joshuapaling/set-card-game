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

  function shuffleArray(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
  }

  return {
    cards: cards,
    shuffle: function(){
      shuffleArray(cards);
    }
  };
};

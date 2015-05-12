/**
 * Implement the fisher-yates shuffle using JavaScript
 */

var shuffleDeck = function(deck) {
  var randomizedDeck = [];
  var size = deck.length;
  for (var i = 0;i < size;i++) {
    randomizedDeck.push(deck[Math.floor(size * Math.random())]);
  }
  return randomizedDeck;
};

var deck = [1,2,3,4,5,6,7];
console.log(shuffleDeck(deck));

var orderedDeck = function() {
  var suits = [ '♥', '♣', '♠', '♦' ];
  var values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
  var deck = [];

  suits.forEach(function(suit) {
    values.forEach(function(value) {
      deck.push(value + suit);
    });
  });

  return deck;
};



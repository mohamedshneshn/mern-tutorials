/*write a program that shuffles a deck of cards and display the first 5 cards using js*/

let deck = [
  "card1",
  "card2",
  "card3",
  "card4",
  "card5",
  "card6",
  "card7",
  "card8",
  "card9",
  "card10",
];

console.log(deck);
console.log(deck.sort(() => Math.random() - 0.5));

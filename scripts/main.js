const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const dealButton = document.getElementById("deal-button");
const hitButton = document.getElementById("hit-button");
const deck = [];
const suits = ["hearts", "spades", "clubs", "diamonds"];
const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
const makeDeck = (rank, suit) => {
  const card = {
    rank: rank,
    suit: suit,
    pointValue: rank > 10 ? 10 : rank,
  };
  deck.push(card);
};

for (let suit of suits) {
  for (const rank of ranks) {
    makeDeck(rank, suit);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  // Execute after page load

});

function makeElement(elType) {
  return document.createElement(elType)
}
dealButton.addEventListener("click", element => {
  
  let cardImg = makeElement("img");
  cardImg.className = "card-img";
  cardImg.src = `./images/${ranks[Math.floor(Math.random() * ranks.length)]}_of_${suits[Math.floor(Math.random() * suits.length)]}.png`;
  playerHand.appendChild(cardImg);

  let cardImg2 = makeElement("img")
  cardImg2.className = "card-img2";
  cardImg2.src = `./images/${ranks[Math.floor(Math.random() * ranks.length)]}_of_${suits[Math.floor(Math.random() * suits.length )]}.png`
  dealerHand.appendChild(cardImg2);
  
  let cardImg3 = makeElement("img");
  cardImg3.className = "card-img3";
  cardImg3.src = `./images/${ranks[Math.floor(Math.random() * ranks.length)]}_of_${suits[Math.floor(Math.random() * suits.length)]}.png`;
  playerHand.appendChild(cardImg3);

  let cardImg4 = makeElement("img")
  cardImg4.className = "card-img4";
  cardImg4.src = `./images/${ranks[Math.floor(Math.random() * ranks.length)]}_of_${suits[Math.floor(Math.random() * suits.length)]}.png`
  dealerHand.appendChild(cardImg4);
  
}) 
hitButton.addEventListener("click", () => {
  
  let cardImg = makeElement("img");
  cardImg.className = "card-img";
  cardImg.src = `./images/${ranks[Math.floor(Math.random() * ranks.length)]}_of_${suits[Math.floor(Math.random() * suits.length)]}.png`;
  playerHand.appendChild(cardImg);

  let cardImg2 = makeElement("img")
  cardImg2.className = "card-img2";
  cardImg2.src = `./images/${ranks[Math.floor(Math.random() * ranks.length)]}_of_${suits[Math.floor(Math.random() * suits.length )]}.png`
  dealerHand.appendChild(cardImg2);

})

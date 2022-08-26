const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const dealButton = document.getElementById("deal-button");
console.dir(dealButton)
const hitButton = document.getElementById("hit-button");
const standButton = document.getElementById("stand-button");
const playerValue = document.getElementById("player-points");
const dealerValue = document.getElementById("dealer-points");
const messages = document.getElementById("messages");
const deck = [];
let dealerHandArr = [];
let playerHandArr = [];

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
  };
};
// function to give the img element a src
let getCardImg = (card) => {
  return `./images/${card.rank}_of_${card.suit}.png`;
};
// shuffle the deck array and push the shuffled items to the shuffle array
let shuffle = () => {
  const shuffleArr = [];
  let i = 0;
  while(i < deck.length) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    if(deck[randomIndex] !== null) {
      shuffleArr.push(deck[randomIndex]);
      deck[randomIndex] = null;
      i++
    };
  };
return shuffleArr;
}
const shuffledDeck = shuffle();

function reloadPage () {
  if(dealButton.disabled === true && hitButton.disabled === true && standButton.disabled === true){
    const reloadPage = window.location.reload()
    return reloadPage;
    
  }
} 
window.addEventListener("DOMContentLoaded", () => {
  // Execute after page load
  
});
// function to make an img element and add src to the image
  function makeElement(src) {
    let cardImg = document.createElement("img");
    cardImg.className = "card-img";
    cardImg.src = src;
    return cardImg;
  };
  // add event listener to deal button
  dealButton.addEventListener("click", element => {
    
    for(let i = 0 ; i < 4 ; i++){

      let remove = shuffledDeck.pop();

      if(i % 2 === 0){
        playerHandArr.push(remove);
        const cardImg = makeElement(getCardImg(remove));
        // value.innerHTML = `Your total points are ${calculate}`;
        playerHand.appendChild(cardImg);

      }else {
        dealerHandArr.push(remove);
        const cardImg = makeElement(getCardImg(remove));
        dealerHand.appendChild(cardImg);

      };

    };
    dealButton.disabled = "true";

    playerValue.innerHTML = playerCalculate(playerHandArr);

    dealerValue.innerHTML = dealerCalculate(dealerHandArr);

  }); 
// add event listener to hit button
  hitButton.addEventListener("click", () => {

    for(let i = 0 ; i < 2 ; i++){

      let remove = shuffledDeck.pop();

      if(i % 2 === 0){
        playerHandArr.push(remove);
        const cardImg = makeElement(getCardImg(remove));
        playerHand.appendChild(cardImg);

      }else if(dealerCalculate(dealerHandArr) >= 17){
        break;

      }else {
        dealerHandArr.push(remove);
        const cardImg = makeElement(getCardImg(remove));
        dealerHand.appendChild(cardImg);

      };

    }; 

    if(playerCalculate(playerHandArr) > 21 && dealerCalculate(dealerHandArr) > 21){
      messages.innerHTML = `player busts, dealer is the winner`;
      hitButton.disabled = 'true';
      standButton.disabled = 'true';

    }else if(playerCalculate(playerHandArr) < 21 && dealerCalculate(dealerHandArr) > 21){
      messages.innerHTML = `dealer busts, player is the winner`;
      hitButton.disabled = 'true';
      standButton.disabled = 'true';

    }else if(playerCalculate(playerHandArr) > 21 && dealerCalculate(dealerHandArr) < 21){
      messages.innerHTML = `player busts, dealer is the winner`;
      hitButton.disabled = 'true';
      standButton.disabled = 'true';

    };
    
    playerValue.innerHTML = playerCalculate(playerHandArr);

    dealerValue.innerHTML = dealerCalculate(dealerHandArr);

    setTimeout(reloadPage,5000);

  });
  // add event listener to stand button
  standButton.addEventListener("click", () => {

    hitButton.disabled = 'true';

    if(playerCalculate(playerHandArr) > dealerCalculate(dealerHandArr) && playerCalculate(playerHandArr) <= 21){
      messages.innerHTML = `player is the winner`;

    }else if (dealerCalculate(dealerHandArr) > playerCalculate(playerHandArr) && dealerCalculate(dealerHandArr) <= 21){
      messages.innerHTML = `dealer is the winner`;

    }else if(playerCalculate(playerHandArr) > 21 && dealerCalculate(dealerHandArr) <= 21){
      messages.innerHTML = `player busts, dealer is the winner`;

    }else if (dealerCalculate(dealerHandArr) > 21 && playerCalculate(playerHandArr) <= 21){
      messages.innerHTML = `dealer busts, player is the winner`;

    }else {
      messages.innerHTML = `Draw`;
    };

    standButton.disabled = 'true';

    setTimeout(reloadPage,5000);

  });
// checking if type of pointValue = string , and change it to number
  function isWord(word) {

    switch (word) {
      case ('ace') :
        word = 1;
        break;
      case ("jack") :
        word = 10;
        break;
      case ("queen") :
        word = 10;
        break;
      case ("king") :
        word = 10;
        break;
    };
    return word;
  };
  // calculate the pointValue of player
  function playerCalculate (array) {

    let playerSum = 0;

    for(let i = 0 ; i < playerHandArr.length; i++){

      if(isWord(playerHandArr[i].pointValue)){
        playerSum += isWord(playerHandArr[i].pointValue);

      }else{
        playerSum += playerHandArr[i].pointValue;

      };
    };
  
    return playerSum;
  
  };
// calculate the pointValue of dealer
  function dealerCalculate (array) {

    let dealerSum = 0;

    for(let i = 0 ; i < dealerHandArr.length; i++){

      if(isWord(dealerHandArr[i].pointValue)){
        dealerSum += isWord(dealerHandArr[i].pointValue);

      }else{
        dealerSum += dealerHandArr[i].pointValue;

      };
    };
  
    return dealerSum;
  };


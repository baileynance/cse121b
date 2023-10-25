// javascript

const cardElement = document.querySelector("#cards");
const suits = ["0", "1", "2", "3"]
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"]
let cardList = [];
let totalValue = [];
let value = 0;

const displayCard = (cardList) => {
        let randomSuit = suits[Math.floor(Math.random()*suits.length)];
        let randomNumber = numbers[Math.floor(Math.random()*numbers.length)];
        let card = cardList[randomSuit][randomNumber];
        let img = document.createElement("img");
        img.src = card;
        img.style = "width: 100px";
        cardElement.appendChild(img);

        let val = parseInt(randomNumber);
        value += val;
        //totalValue.push(val);
}

const displayValue = () => {
    const p = document.querySelector("#cardValue");
    p.textContent = `Your current total value of cards is ${value}`;
}

const getCards = async () => {
    const response = await fetch("https://baileynance.github.io/cse121b/json/playingcard.json");
        if (response.ok) {
            cardList = await response.json();
            displayCard(cardList);
        }
}

const dealCards = () => {
    clearCards();
    for (let i = 0; i < 5; i++) {
        getCards();
    }
    displayValue();
}

const clearCards = () => {
    cardElement.innerHTML = "";
}

const clearArray = (array) => {
    while (array.length > 0) {
      array.pop();
    }
}

const checkWinner = () => {
    const w = document.querySelector("#winner");
    
    if (value > 45) {
    w.textContent = `Congratulations you are a winner!`;
    }
    else {
    w.textContent = "";
    }
}
// const newValue = (totalValue) => {
//    return totalValue.reduce((x, y) => x + y);
//}

document.querySelector("#deal").addEventListener("click", dealCards);
document.querySelector("#deal").addEventListener("click", checkWinner);
document.querySelector("#clear").addEventListener("click", clearCards);
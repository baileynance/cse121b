// javascript

const cardElement = document.querySelector("#cards");
const suits = [0, 1, 2, 3]
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"]
let cardList = [];

const displayCard = (cardsList) => {
        let randomSuit = suits[Math.floor(Math.random()*items.length)];
        let randomNumber = numbers[Math.floor(Math.random()*items.length)];
        let card = cardsList[randomSuit][randomNumber];
        let img = document.createElement("img");
        img.src = card;
        cardElement.appendChild(img);
}

const getCards = async () => {
    const response = await fetch("/json/playingcard.json");
        if (response.ok) {
            cardList = await response.json();
            displayCard(cardList) 
        }
}


getCards();
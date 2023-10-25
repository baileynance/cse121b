// javascript

const cardElement = document.querySelector("#cards");
let cardList = [];

const displayCard = (cards) => {
        let img = document.createElement("img");
        img.src = cards.imageUrl;
        cardElement.appendChild(img);
}

const getCards = async () => {
    const response = await fetch("/json/playingcard.json");
        if (response.ok) {
            cardList = await response.json();
            displayCard(cardList) 
        }
}
let deckCards = [];
let element = document.querySelector(".card");
const parrotGifs = ['1.gif', '2.gif', '3.gif', '4.gif', '5.gif', '6.gif', '7.gif'];
const deckDiv = document.querySelector('.deck');


function loadGame(){
    const cardNumber = Number (prompt ('Entre 4 a 14, somente pares, quantas cartas você quer?'));

    if (cardNumber < 4 || cardNumber > 14 || cardNumber % 2 !== 0){
        return loadGame()
    } else {
        i = 0
        while (i < cardNumber/2) {
        deckCards.push(parrotGifs[i])
        deckCards.push(parrotGifs[i])
        i++
        }
    }
    loadCards()
}

function loadCards(){
    for (let i = 0; i < deckCards.length; i++){
        deckDiv.innerHTML +=
            `<div onclick="flipCard(this)" class="card">
                <div class="front"><img src="./assets/${deckCards[i]}"></div>
                <div class="back"><img src="./assets/back.png"></div>
            </div>`
    }
}

function flipCard(element){
    element.classList.add("flip");
}
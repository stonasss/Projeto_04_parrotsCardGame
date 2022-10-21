let deckCards = [];
let cardNumber
let selectedCards = [];
let timesClicked = 0;
let cardsMatched = 0;
const parrotGifs = ['1.gif', '2.gif', '3.gif', '4.gif', '5.gif', '6.gif', '7.gif'];
let parrot = document.getElementById('card');
let parrot1
let parrot2


function loadGame(){
    cardNumber = Number (prompt ('Entre 4 a 14, somente pares, quantas cartas você quer?'));

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
    const deckDiv = document.querySelector('.deck');

    deckCards.sort(comparador); // Após esta linha, a minhaArray estará embaralhada

    for (let i = 0; i < deckCards.length; i++){
        deckDiv.innerHTML +=
            `<div onclick="flipCard(this, '${deckCards[i]}')" class="card" id="${deckCards[i]}">
                <div class="front"><img src="./assets/${deckCards[i]}"></div>
                <div class="back"><img src="./assets/back.png"></div>
            </div>`
    }
    
}

function flipCard(element, id){

    
    if (timesClicked % 2 == 0){
        parrot1 = element;
        element.classList.add("flip");
        element.classList.add("selected1");
        selectedCards.push(id)
    } else {
        parrot2 = element;
        element.classList.add("flip");
        element.classList.add("selected2");
        selectedCards.push(id);
        compareCard()
    }

    const cardsClicked = document.getElementById("flip");
    
    timesClicked++;

    
}

function compareCard() {
    /*amountClicked = selectedCards.length;*/
    let parrotClicked1 = parrot1.getAttribute("id");
    let parrotClicked2 = parrot2.getAttribute("id");

    if (selectedCards.length == 2) {
        
        if (parrotClicked1 !== parrotClicked2) {

        setTimeout(() => {
        
            parrot1.classList.remove("flip");
            parrot1.classList.remove("selected1");
            parrot2.classList.remove("flip");
            parrot2.classList.remove("selected2");
            selectedCards.length = 0;
            
        },1000)
        } else {
            parrot1.classList.add("matched");
            parrot2.classList.add("matched");
            cardsMatched+=2;
            selectedCards.length = 0;

            if (cardsMatched == cardNumber){
            setTimeout(() => {
                victory();
            },1000)
            }
        }
    }
}

function victory(){
    alert(`'Parabéns! Você venceu com um número de ${timesClicked}'`)
}

// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}
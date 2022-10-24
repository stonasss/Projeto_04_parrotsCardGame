let deckCards = [];
let selectedCards = [];
let timesClicked = 0;
let cardsMatched = 0;
let time = Number(0);
let parrot = document.getElementById('card');
let cardNumber
let parrot1
let parrot2
const parrotGifs = ['1.gif', '2.gif', '3.gif', '4.gif', '5.gif', '6.gif', '7.gif'];


function loadGame(){  //primeira função rodada quando inicia a página, pede número de cartas para carregar
    cardNumber = Number (prompt ('Entre 4 a 14, somente pares, quantas cartas você quer?'));
    parrotGifs.sort(randomizer);

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
    loadCards()  //quando a condição é satisfeita, inicia-se a função de carregar as cartas
}

function loadCards(){  //função que insere as cartas pedidas no html e, consequentemente, na tela do jogador
    const deckDiv = document.querySelector('.deck');

    deckCards.sort(randomizer); // Após esta linha, a minha Array estará embaralhada

    for (let i = 0; i < deckCards.length; i++){
        deckDiv.innerHTML +=
            `<div onclick="flipCard(this, '${deckCards[i]}')" class="card" id="${deckCards[i]}">
                <div class="front"><img src="./assets/${deckCards[i]}"></div>
                <div class="back"><img src="./assets/back.png"></div>
            </div>`
    }
    
}

function flipCard(element, id){  //função que vira a carta e guarda informações da mesma
    if (timesClicked % 2 == 0){
        parrot1 = element;
        element.classList.add("flip");
        element.classList.add("selected1");
        selectedCards.push(id)  //insere o id da carta escolhida na array selectedCards
    } else {
        parrot2 = element;
        element.classList.add("flip");
        element.classList.add("selected2");
        selectedCards.push(id); 
        compareCard()  //a função de comparar as cartas viradas se aplica apenas nessa condição 'else'
    }
    timesClicked++;  //mantém guardado o número de clicks feitos para mostrar no final do jogo
}

function compareCard() {  //função que realiza a comparação das cartas que foram viradas
    let parrotClicked1 = parrot1.getAttribute("id");  //por isso a existência do 'id' na função flipCard()
    let parrotClicked2 = parrot2.getAttribute("id");

    if (selectedCards.length == 2) {
        
        if (parrotClicked1 !== parrotClicked2) {  //quando a carta virada não for igual à outra virada

        setTimeout(() => {
        
            parrot1.classList.remove("flip");
            parrot1.classList.remove("selected1");  //sem função, apenas para facilitar leitura pelo console
            parrot2.classList.remove("flip");
            parrot2.classList.remove("selected2");  //similar ao 'selected1'
            selectedCards.length = 0;
            
        },1000)
        } else {  //quando a carta virada for igual à outra virada
            parrot1.classList.add("matched");
            parrot2.classList.add("matched");
            cardsMatched+=2;
            selectedCards.length = 0;

            if (cardsMatched == cardNumber){ //quando o número de cartas viradas = número de cartas escolhidas
            setTimeout(() => {
                victory();
            },400)
            }
        }
    }
}

function victory(){  //reproduzida em caso de vitória
    alert(`'Parabéns! Você venceu em ${time} segundos após ${timesClicked} jogadas.'`);
    replayGame();
}

function replayGame(){   //parte bônus, dá opção de reiniciar ou não a partida
    const answer = prompt('Gostaria de jogar novamente?');

    if (answer == 'sim') {
        location.reload();  //recarrega a página e inicia a função "loadGame()", reiniciando a partida 
    } else if (answer == 'não') {
        return false;  //cancela a função replayGame()
    } else {
        return replayGame();  //reinicia a função replayGame()
    }
}

function timer(){  //cronômetro
    count = setInterval(timeCounted, 1000);

    function timeCounted(){    
        const timeContainer = document.querySelector(".time");
        timeContainer.innerHTML = time;
        time++;
        if (cardsMatched == cardNumber){
            clearInterval(count)  //encerra a contagem
        }
    }
}

function randomizer() {  //responsável por deixar a ordem das cartas aleatória
	return Math.random() - 0.5; 
}
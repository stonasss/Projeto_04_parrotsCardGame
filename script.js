function loadGame(){
    const choice = Number (prompt ('Entre 4 a 14, somente pares, quantas cartas você quer?'));
    const deckCards = document.querySelector('.deck');
    const cardAmount = [choice];

    if (choice < 4 || choice > 14 || choice % 2 !== 0){
        return loadGame()
    } else {
        i = 0
        while (i < cardAmount) {
        
        deckCards.innerHTML += 
        `<div class="card">
            <img src="/Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png">
        </div>`
        i++
    }
}
}

let cartas = []
let sum = 0
let ganhou = false
let taVivo = false
let mensagem = ""
let mensagemEl = document.getElementById("mensagem-el")
let somaEl = document.getElementById("soma-el")
let cartasEl = document.getElementById("cartas-el")
let cartaMaquina = document.getElementById("cartaMaquina-el")
let cartaCasa = 0
let jogador = {
    nome: "Jogador",
    fichas: 145
}
jogadorEl = document.getElementById("jogador-el")
jogadorEl.textContent = `${jogador.nome}: R$${jogador.fichas}`

function getRandomCard(){
    let carta = Math.floor(Math.random() * 12) + 1
    if (carta > 10){
        return 10
    }else if (carta === 1){
        return 11
    }else{
        return carta
    }
 
}

function startGame(){
    cartaCasa = cartaAdversario()
    taVivo = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cartas = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}



function renderGame() {
    cartaMaquina.textContent = ""
    ganhou = false
    cartasEl.textContent = "Cartas: "

    for ( let i = 0; i < cartas.length; i++){
        cartasEl.textContent += cartas[i] + " "
    }

    somaEl.textContent = `Soma: ${sum}`
    if (sum <= 20) {
        mensagem = "Quer continuar?"
        //console.log(mensagem)
    }else if (sum === 21) {
        mensagem = "Voce ganhou! :)"
        //console.log(mensagem)
        ganhou = true
        jogo()
    }else {
        mensagem = "Voce perdeu! :/"
        //console.log(mensagem)
        taVivo = false
        jogo()
    }
    

mensagemEl.textContent = mensagem
console.log(taVivo)
console.log(ganhou)

}

function novaCarta() {
    if (taVivo === true && ganhou === false){
    newCard = getRandomCard()
    sum += newCard
    cartas.push(newCard)
    renderGame()
    cartasEl.textContent = `Cartas: ${cartas[i]}`
  }
}  

function newGame() {
    window.location.reload()
 }

 function jogo() {
    if(taVivo === false){
        jogador.fichas -= 20
        jogadorEl.textContent = `${jogador.nome}: R$ ${jogador.fichas}`
    }else if(ganhou === true){
        jogador.fichas += 20
        jogadorEl.textContent = `${jogador.nome}: R$ ${jogador.fichas}`

    }else if(jogador.fichas === 0){
        newGame()
    }

    
 }

 function parar() {
    if(cartaCasa < sum) {
        jogador.fichas += 20
        jogadorEl.textContent = `${jogador.nome}: R$${jogador.fichas}`
        cartaMaquina.textContent = `Carta da casa: ${cartaCasa}`
    }else if(cartaCasa > sum){
        jogador.fichas -= 20
        jogadorEl.textContent = `${jogador.nome}: R$${jogador.fichas}`
        cartaMaquina.textContent = cartaCasa
    }else{
        cartaMaquina.textContent = "Empate"
    }

 }
 function cartaAdversario() {
    cartaRuim = Math.floor(Math.random() * 20) + 1
    return cartaRuim
 }
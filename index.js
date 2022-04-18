
let cards = [] // dynamic array
let sum = 0
let hasBlackJack = false // boolean value
let isAlive = false
let message = ""

let messageEL =document.getElementById("message-el") // object method 
// console.log(messageEL)
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")

let player = {//oops objects 
    name :"Per", //contains key:value pairs
    chips: 145
}

let playerEl = document.getElementById("player-el")// getting html id from html
playerEl.textContent = player.name +": $" + player.chips//object "." 

function getRandomCard(){//random card using math
    let randomNumber= Math.floor(Math.random()*13) + 1
    if (randomNumber>10) { // if-else conditional statement
        return 10
        
    }
    else if (randomNumber === 1) { // "===" this are the comparisons operators
        return 11
        
    }
    else{
        return randomNumber

    }
}

function startGame(){//function 1sy
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    let cards = [firstCard,secondCard]
    let sum = firstCard +secondCard


    renderGame()// function 1st calling 2nd function
}





function renderGame(){//function 2

    cardEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent = cards[i]+" ";
        
    }
    sumEl.textContent = "Sum: "+ sum



    if(sum <= 20){
        console.log("do you want to draw a new card") // console print the messages
    }
    
    else if (sum === 21) {
        message= "Wohoo! you're got blackjack"
        hasBlackJack = true
    }
    else{
        message = "you're out of the game"
        isAlive = false
    }
    
    messageEL.textContent = message //The textContent property sets or returns the text content of the specified node, and all its descendants.


}

function newCard(){
    if (isAlive === true && hasBlackJack === false) { // && is a logical operator 
        let card =getRandomCard()

        sum += card

        cards.push(card) //push pre-defined template

        console.log(cards)

        renderGame()
        
    }

    


}
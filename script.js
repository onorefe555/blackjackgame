
let message_el= document.querySelector("#message_el");
let card_el =  document.getElementById("card_el");
let sum_el = document.querySelector("#sum_el");
let per_el= document.getElementById("per_el");

// let player = {
//     name: "per",
//     chips: "145"
// }

let firstValue = randomCard();
let secondValue= randomCard();
let cards = [firstValue]


let sum = firstValue  ;
function randomCard() {
let randomNumber = Math.floor(Math.random()*13)+1
return randomNumber
}
function startGame() {
isAlive = true;
 hasBlackJack = false;
    renderGame()
    per_el.textContent=player.name+" &"+player.chips;
}
let message = ""
function renderGame() {
 card_el.textContent = "Card:" 
 for(i=0; i < cards.length; i++){
     card_el.textContent+=cards[i]+" ,"+"  "
     sum_el.textContent ="Sum: "+sum
  
 }  
 if(sum < 20){
         message="Did you want to draw a New Card? "
     }
     else if(sum===21){
         message=" Woooowwww you've won, you just got a Blackjack"
         hasBlackJack= true;
     }
     else{
         message= "Sorry you are out of the game!"
         isAlive=false 
     }
 message_el.textContent=message
}
function newcard() {
if(isAlive===true && hasBlackJack===false) {
    let pushCard= randomCard();
   sum+=pushCard
   cards.push(pushCard)
   renderGame()
}
   
}
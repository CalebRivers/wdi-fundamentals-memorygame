console.log("Up and running");


var cards = ["queen" , "queen" , "king" , "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[1];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
	console.log("Nice!");
	if (cardsInPlay[0] === cardsInPlay [1]) {
		alert("you found a match ");
	}
	else {
			alert ("you did not find a match");
		}
}
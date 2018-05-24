console.log("Up and running");


var cards = ["queen" , "queen" , "king" , "king"];
var cardsInPlay = [];

var checkForMatch = function () {

	if (cardsInPlay.length === 2) {
		console.log("Nice!");
		if (cardsInPlay[0] === cardsInPlay [1]) {
			alert("you found a match ");
		}
		else {
			alert ("you did not find a match");
		}
	}
}

var flipCard = function (cardID) {
	console.log ("User flipped " + cards[cardID]);
	cardsInPlay.push(cards[cardID]);

};

flipCard(0);
flipCard(1);
checkForMatch();

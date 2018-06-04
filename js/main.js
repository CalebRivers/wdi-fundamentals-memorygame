console.log("Up and running");


var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
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
	console.log ("User flipped " + cards[cardID].rank);
	cardsInPlay.push(cards[cardID].rank);
	console.log(cards[cardID].suit);
	console.log(cards[cardID].cardImage);

};

flipCard(0);
flipCard(1);
checkForMatch();

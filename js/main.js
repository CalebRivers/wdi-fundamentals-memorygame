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

var flipCard = function () {
	var cardID = this.getAttribute('data-id');
	console.log ("User flipped " + cards[cardID].rank);
	cardsInPlay.push(cards[cardID].rank);
	console.log(cards[cardID].suit);
	console.log(cards[cardID].cardImage);
	this.setAttribute('src', (cards[cardID].cardImage));

};

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src',"images/back.png");
		cardElement.setAttribute('data-id',cardElement[i]);
		cardElement.addEventListener('click', flipCard());
		document.getElementById('game-board').appendChild(cardElement);
	}
}
createBoard();
checkForMatch();

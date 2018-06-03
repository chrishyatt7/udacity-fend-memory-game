// Create a list that holds all of your cards
let cardList = ['fa-paper-plane-o', 'fa-paper-plane-o', 'fa-anchor', 'fa-anchor', 'fa-cube', 'fa-cube', 'fa-leaf', 'fa-leaf', 'fa-diamond', 'fa-diamond', 'fa-bomb', 'fa-bomb', 'fa-bolt', 'fa-bolt', 'fa-bicycle', 'fa-bicycle'];

// Display the cards on the page
// Shuffle the list of cards
cardList = shuffle(cardList);

// Create deck fragment
const deckFrag = document.createDocumentFragment();
// Loop through each card and create its HTML
for (card in cardList) {
	const newCard = document.createElement('li');
	newCard.className = 'card match ' + card;
	newCard.innerHTML = '<i class="fa ' + cardList[card] + '"></i>';

	deckFrag.appendChild(newCard);
}
// Select deck
const cardDeck = document.querySelector('.deck');
// Add cards to DOM
cardDeck.appendChild(deckFrag);


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Display card's symbol function
// Add card to open card list function --> toggle 'open' class and 'show' class
// Card match function --> toggle 'match,' 'open', 'show' classes
// Non-match function
// Update move counter function
// End game function


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)

 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)

 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)

 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)

 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)

 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

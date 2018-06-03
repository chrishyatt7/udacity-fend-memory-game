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
	newCard.className = 'card match';
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

// Display card symbol function --> toggle 'open' class and 'show' class
function displayCard() {

}
// Add card to open card list
function openCard() {

}
// Card match function --> toggle 'match,' 'open', 'show' classes
function cardMatchTrue() {

}
// Non-match function
function cardMatchFalse() {

}
// Update move counter function
function updateMoveCounter() {

}
// End game function
function finalScore() {

}

// Add event listener for each card
cardDeck.addEventListener('click', function(evt) {
  // Display the card's symbol
  displayCard();
  // Add the card to a *list* of "open" cards
  openCard();
  // If the list already has another card, check to see if the two cards match
  if () {
    // If the cards do match, lock the cards in the open position
    cardMatchTrue();
  } else {
    // If the cards do not match, remove the cards from the list and hide the card's symbol
    cardMatchFalse();
  }
  // Increment the move counter and display it on the page
  updateMoveCounter();
  // If all cards have matched, display a message with the final score
  finalScore();
});
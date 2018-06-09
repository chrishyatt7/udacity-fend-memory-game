// Create a list that holds all of your cards
let cardList = ['fa-paper-plane-o', 'fa-paper-plane-o', 'fa-anchor', 'fa-anchor', 'fa-cube', 'fa-cube', 'fa-leaf', 'fa-leaf', 'fa-diamond', 'fa-diamond', 'fa-bomb', 'fa-bomb', 'fa-bolt', 'fa-bolt', 'fa-bicycle', 'fa-bicycle'];

let openCardList = [];
let moveSpan = document.querySelector('.moves');

// Display the cards on the page
// Shuffle the list of cards
cardList = shuffle(cardList);

// Create deck fragment
const deckFrag = document.createDocumentFragment();
// Loop through each card and create its HTML
for (card in cardList) {
	const newCard = document.createElement('li');
	newCard.classList.add('card', card);
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
function displayCard(card) {
  card.classList.add('open', 'show');
}
// Add card to open card list
function openCard(card) {
  openCardList.push(card);
}
// Card match function --> toggle 'match,' 'open', 'show' classes
function cardMatchTrue(cardList) {
  for (card in cardList) {
    cardList[card].classList.add('match');
    cardList[card].classList.remove('open', 'show');
  }
  cardList.length = 0;
}
// Non-match function
function cardMatchFalse(cardList) {
  for (card in cardList) {
    cardList[card].classList.remove('open', 'show');
  }
  cardList.length = 0;
}
// Update move counter function
function updateMoveCounter() {
  moveCounter++;
  if (moveCounter === 1) {
    moveSpan.innerHTML = moveCounter + ' Move';
  } else {
    moveSpan.innerHTML = moveCounter + ' Moves';
  }
}
// Update score
function updateScore() {
  if (moveCounter >= 25 && moveCounter < 35) {
    document.querySelector('#hard').classList.remove('filled');
  } else if (moveCounter >= 35) {
    document.querySelector('#medium').classList.remove('filled');
  }
}
// End game function
function finalScore() {
}

// Add event listener for each card
cardDeck.addEventListener('click', function(evt) {
  // Display the card's symbol
  displayCard(evt.target);
  // Add the card to a *list* of "open" cards
  openCard(evt.target);
  // If the list already has another card, check to see if the two cards match
  if (openCardList.length > 1) {
    if (openCardList[0].innerHTML === openCardList[1].innerHTML) {
      // If the cards do match, lock the cards in the open position
      cardMatchTrue(openCardList);
    } else {
      // If the cards do not match, remove the cards from the list and hide the card's symbol
      setTimeout(function() {
        cardMatchFalse(openCardList);
      }, 500);
    }
  }
  // Increment the move counter and display it on the page
  updateMoveCounter();
  // Update score
  updateScore();
  // If all cards have matched, display a message with the final score
  finalScore();
});
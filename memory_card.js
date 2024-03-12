// Array of pairs for the card values
const cardValues = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

// Duplicate the values to create matching pairs
const cardPairs = [...cardValues, ...cardValues];
// Shuffle the array to randomize card positions
const shuffledPairs = shuffleArray(cardPairs);

// Create the game board
const gameBoard = document.getElementById("game-board");
createGameBoard(shuffledPairs);

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to create the game board
function createGameBoard(cards) {
  cards.forEach((value, index) => {
    const card = document.createElement("div");
    card.classList.add("card", "hidden");
    card.dataset.index = index;
    card.innerText = value;
    card.addEventListener("click", revealCard);
    gameBoard.appendChild(card);
  });
}

let flippedCards = [];
let matchedPairs = 0;

// Function to handle card click
function revealCard() {
  const selectedCard = this;

  if (selectedCard.classList.contains("hidden") && flippedCards.length < 2) {
    selectedCard.classList.remove("hidden");
    flippedCards.push(selectedCard);
    if (flippedCards.length === 2) {
      setTimeout(checkMatch, 500);
    }
  }
}

// Function to check if the flipped cards match
function checkMatch() {
  const card1 = flippedCards[0];
  const card2 = flippedCards[1];
  if (card1.innerText === card2.innerText) {
    // Matched
    card1.removeEventListener("click", revealCard);
    card2.removeEventListener("click", revealCard);
    matchedPairs++;

    // Check if all pairs are matched
    if (matchedPairs === cardValues.length) {
      alert("Congratulations! You matched all pairs.");
    }
  } else {
    // Not matched
    card1.classList.add("hidden");
    card2.classList.add("hidden");
  }

  flippedCards = [];
}

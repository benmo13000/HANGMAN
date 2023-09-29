//constants
const wordList = ["gonczar", "pain", "kenjamin", "javascriptisapainintheass"];
const maxLives = 6;
// state variables
let wordDivs = "";
let currentWord = "";
let guessedLetters = [];
let lives 


//cached element
const restartButtonEl = document.getElementById("restart-button");
const livesDisplayEl = document.getElementById("lives-display");
const wordDisplayEl = document.getElementById("word-display");
const guessInputEl = document.getElementById("guess-input");
const guessButtonEl = document.getElementById("guess-button");
const titleEl = document.getElementById("title");
//event listeners
guessButtonEl.addEventListener("click", handleGuess);
restartButtonEl.addEventListener("click", initializeGame);

//functions
function updateLivesDisplay() {
	if (lives > 0) {
		lives--;
		livesDisplayEl.textContent = `Lives: ${lives}`;
		if (lives === 0) {
			handleLoss();
		}
	}
}

function initializeGame() {
	currentWord = wordList[Math.floor(Math.random() * wordList.length)];
	titleEl.innerText = "Hangman!!"
	guessedLetters = [];
	lives = maxLives;
	livesDisplayEl.textContent = `Lives: ${lives}`;
	wordDisplayEl.innerHTML = "";
	renderWord();
	guessInputEl.value = "";
}
function renderWord() {
	for (let i = 0; i < currentWord.length; i++) {
		const divEl = document.createElement("div");
		divEl.innerText = "_ "
		divEl.classList.add("letter")
		wordDisplayEl.appendChild(divEl);
	}
    wordDivs = document.querySelectorAll(".letter")
}

function handleGuess() {
	let input = guessInputEl.value;
	let foundIndexes = [];
	if (guessedLetters.indexOf(input) === -1) {
		guessedLetters.push(input);
		if (currentWord.indexOf(input) === -1) {
			updateLivesDisplay();
		} else {
			for (let i = 0; i < currentWord.length; i++) {
				if (currentWord[i] === input) {
					foundIndexes.push(i);
				}
			}
			for (let index of foundIndexes) {
				wordDivs[index].innerText = input;
			}
			if (checkWin()) {
				titleEl.innerText = "YOU WON!!!!!!!";
			}
		}
	}
	guessInputEl.value = "";
}

function handleLoss() {
	titleEl.innerText = "You Lose! The correct word was: " + currentWord;
}

function checkWin() {
    for (let i = 0; i < currentWord.length; i++) {
      if (guessedLetters.indexOf(currentWord[i]) === -1) {
        return false;
      }
    }
    return true;
}
initializeGame()
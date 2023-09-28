   //define constants

     const wordList = ["googoogaga"];
     const maxAttempts = 6;
     let currentWord = "";
     let guessedWord = "";
     let guessedLetters = [];
     let attemptsLeft = maxAttempts;
     let wordDivs 
     let lives = 6;
    //  , "kenjamin", "laptop", "JavaScriptIsAPainInTheAss"


// restart button element
// const restartButton = document.getElementById(restart_Button);

// Score display element
// const scoreDisplay = document.getElementById(Score_Display);

// Lives display element
const livesDisplayEl = document.getElementById("lives_display");

//words display
const wordDisplayEl = document.getElementById("word-display");

//input
const guessInputEl = document.getElementById("guess-input");

//guess button
const guessButtonEl = document.getElementById("guess-button");

function updateLivesDisplay(){
    lives--;
    livesDisplayEl.textContent = `Lives: ${lives}`;
    if(lives === 0){
        handleLoss();
    }
}

console.log(wordDisplayEl)
function initializeGame() {
renderWord()
}
function resetGame(){
    guessedLetters = [];
    attemptsLeft = maxAttempts;
    wordDisplayEl.innerHTML = "";
    renderWord();
    guessInputEl.value = "";

}
const restartButtonEl = document.getElementById("restart-button");
restartButtonEl.addEventListener("click", resetGame);

initializeGame()



function renderWord(){
    currentWord = wordList[0]
    for (let i = 0; i< currentWord.length; i++){
        console.log(i)
        const divEl = document.createElement("div");
        divEl.innerText = "_"
        divEl.classList.add("letter")
        wordDisplayEl.appendChild(divEl);
}
    wordDivs = document.querySelectorAll(".letter")
}

function handleGuess(){
  let input = guessInputEl.value
  let foundIndexes = []
  if(currentWord.indexOf(input) !== -1){
  }else{
    updateLivesDisplay();
    for (let i=0; i < currentWord.length; i++){
        if (currentWord[i] === input) {
            foundIndexes.push(i);
        }
    }
    for (let index of foundIndexes) {
        wordDivs[index].innerText = input;
    }
    if(checkWin()) {
        alert("YOU WON!!!!!!!")
    }
}
}

function checkWin() {
    for (let div of wordDivs) {
      if (div.innerText === "_") {
        return false; 
      }
    }
    return true;
    
  }


guessButtonEl.addEventListener("click", handleGuess)
guessInputEl



//  Initiate another array of same length as word, but each character is an “_”.

//  Initialize variable “lives” = 6

//  While loop, runs while “lives” > 0

//  Prompt user to guess a letter a through z.

//  For loop: number of iterations = length of word

//  For each iteration, test whether the character entered by the player matches

//  the letter of the number of the current iteration.

//  End the loop.

//  If Condition 1: check whether any letters matched,

//  If true, variable “lives” is decreased by 1

//  Else if: If letters do match,

//  replace the “_” with said letter.

// If condition 2: check whether new string is equal to original word

//  If true, Print “CONGRATULATIONS YOU WIN!!” & end loop

//  If condition 3: Check whether lives = 0

//  If true, print “You lose” & end loop

//  End while loop



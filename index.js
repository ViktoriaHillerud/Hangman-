const animals = ['dog', 'duck', 'cat', 'fish', 'dolphin'];
const board = document.querySelector('.board');
let randomWord;
let guesses =  6;
let guessedRight = 0;
let guessLeft = document.querySelector('.guessesLeft');
let guessedLetters = document.querySelector('.guessedLetters');
const letterToGuess = document.querySelector('.letterToGuess');
const btn = document.querySelector('.start').addEventListener('click', showBoard);

guessedLetters = []; 

function showBoard() {
  randomWord = animals[Math.floor(Math.random() * animals.length)];

  for (let i = 0; i < randomWord.length; i++) {
    const letterDiv = document.createElement('div');

    letterDiv.textContent = ''; 
    letterDiv.style.display = "flex"; 
    letterDiv.style.justifyContent = "center";
    letterDiv.style.alignItems = "center";
    letterDiv.style.border = '2px solid green';
    letterDiv.style.margin = '10px';
    letterDiv.style.height = '50px';
    letterDiv.style.width = '50px';
    board.appendChild(letterDiv);
  }
  const guessDiv = document.createElement('input');

    guessDiv.style.border = "none";
    guessDiv.style.borderBottom = '2px solid red';
    guessDiv.style.outline = "none";
    guessDiv.style.margin = '20px';
    guessDiv.style.height = '50px';
    guessDiv.style.width = '50px';
    guessDiv.addEventListener('input', function (event) {
      const guessedLetter = event.target.value;
      checkLetter(guessedLetter);
      setTimeout(() => {
        event.target.value = ''; // Clear the input field after 2 seconds (adjust the time as needed)
      }, 400);
      guessedletters.push().innerHTML = guessedLetter
    });
    
    letterToGuess.appendChild(guessDiv);
    guessDiv.focus(); 
  guessLeft.innerHTML = guesses;
 
  
}

function checkLetter(guessedLetter) {
  
  let correctGuess = false;
  for (let i = 0; i < randomWord.length; i++) {
    if (randomWord[i] === guessedLetter.toLowerCase()) {
      correctGuess = true;
      guessedRight++;
      const boardDivs = board.querySelectorAll('div');
      boardDivs[i].textContent = guessedLetter;
    }
  }
  
  if (!correctGuess) {
    guesses--;
    guessedLetters.for
    guessLeft.innerHTML = `You have ${guesses} guesses left`;
    let hangman = document.querySelector('.picHolder');
    hangman.src = "images/h" + guesses + ".png";
    if (guesses < 1 || 0){
      board.style.visibility = "hidden"
      guessLeft.innerHTML = `You loose! The word was ${randomWord}`;
      setTimeout(() => {
       window.location.reload()
      }, 2000);
     }
    
   }
  if (correctGuess) {
   guessLeft.innerHTML = `You have ${guesses} guesses left`;
   
  if (guessedRight === randomWord.length){
    board.style.visibility = "hidden"
guessLeft.innerHTML = `You win! The word was ${randomWord}`;
setTimeout(() => {
  window.location.reload()
 }, 1500);
   }
  } 
  
}



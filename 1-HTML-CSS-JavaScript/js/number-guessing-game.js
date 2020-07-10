function runGame() {
    const target = Math.floor(Math.random * 99) + 1;
}

let guessString = '';
let guessNumber = 0;
let correct = false;
let numTries = 0;

do {
    prompt('I am thinking of a number between 1 - 100. Take a guess!');
    return guessString;

    numTries+=1;
    
    guessNumber = +guessString;

    checkGuess(guessNumber, target);
} while(guess=!correct);
function createBlueprint() {

}



let eWidth = 0;
let hDiff = 0;









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


/* 

The narrowest available wheelchairs are 24.5 inches wide, so there is
no reason to create a ramp with amy smaller dimension than that.

ADA compliance mandates that doors have a width of 32 inches, so that
will be the assumed defailt size if no measurements are specified.

Dependent upon the needs of the person using the ramp, you do have options.


*/
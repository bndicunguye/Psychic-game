// to declare all variables we are using 
var arrayletter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
var wins = 0;
var loss = 0;
var guessleft;
var userguess;
var guessedLetters;
var computerGuess;
var htmlWin = document.getElementById("win")
var htmllose = document.getElementById("lose")
var htmlguessleft = document.getElementById("guessleft")
var htmlletterguessed = document.getElementById("lettersguessed")

// to make a function named reset function, to start a game after guessing letter 9times,

reset()
function reset() {
    guessleft = 9;
    guessedLetters = []
    // to make computer pick randomely a letter included in var arrayletter
    computerGuess = arrayletter[Math.floor(Math.random() * arrayletter.length)];
    // set up an html  to display to the user the wins,loss,guessleft and letterguessed
    htmlWin.innerHTML = wins;
    htmllose.innerHTML = loss;
    htmlguessleft.innerHTML = guessleft;
    htmlletterguessed.innerHTML = ""
}
// to set up a function named document.onkeyup so that every time you hit key, an event happen
document.onkeyup = function (event) {
    // set the key to lowercase
    userguess = event.key.toLowerCase();
    // set up  a condition indicating that once a letter guessed is included in arrayletter,
    if (arrayletter.indexOf(userguess) !== -1) {
        // set up a condition indicating that once a letter guessed is not included in guessedletters,
        if (guessedLetters.indexOf(userguess) === -1) {
            // set up a push method to add a new letter to array
            guessedLetters.push(userguess)
            check()
        }
        // set up an if not condition or otherwise display the following messages to the user
        else {
            alert("you already guessed this letter")
        }
    }
    else {
        alert("you may only guess a letter")
    }


}
// set up a magic letter that computer is guessing
function check() {
    // set up the condition to win the game get stated again.
    if (userguess === computerGuess) {
        wins++;
        reset()
    }
    if (userguess !== computerGuess) {
        guessleft--;
        // set up html guessleft,guessedletters to display to the user
        htmlguessleft.innerHTML = guessleft;
        htmlletterguessed.innerHTML = guessedLetters.join(" ")
        // set up the condition lose after guessing 9times and the game get stated again.
        if (guessleft === 0) {

            loss++;
            reset()

        }

    }

}

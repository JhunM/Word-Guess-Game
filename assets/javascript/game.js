var computerChoices = ["a","b","c","d","e","f","g",
                        "h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var loses = 0;
var guess = 9;


var winsText = document.getElementById("wins-text");
var losesText = document.getElementById("loses-text");
var guessesLeft = document.getElementById("guesses-left");
var soFar = document.getElementById("sofar");

document.onkeyup = function(event) {

    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
}

if ((userGuess === computerGuess))
    {wins++;

    } else if ((guess-->10));


winsText.textContent = "wins: " + wins;
losesText.textContent = "lose: " + loses;
guessesLeft.textContent = guess;


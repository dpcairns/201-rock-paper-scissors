//imports functions
import { getRandomThrow } from './get-random-throw.js';
import { checkResult } from './check-result.js';
//starts and plays the games
const playButton = document.getElementById('play-rps');

//states that change
const userChoice = document.querySelector('input:checked');
const computerChoice = document.getElementById('rps-computer-choice');
const numWins = document.getElementById('wins');
const totalGames = document.getElementById('total-games');

//resets game
const resetButton = document.getElementById('reset-button');

//initializing
let userWins= 0;
let gamesPlayed = 0;
let computerThrow = '';

console.log(userChoice);

playButton.addEventListener('click', () => {
    const userChoice = document.querySelector('input:checked');
    let playerThrow = userChoice.value;
    computerThrow = getRandomThrow();
    let gameResult = checkResult(playerThrow, computerThrow);
    computerChoice.style.visibility = 'visible';
    console.log(gameResult);


});

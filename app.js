//starts the game
const playButton = document.getElementById('play-rps');

//states that change
const userChoice = document.querySelector('radio');
const computerChoice = document.getElementById('rps-computer-choice');
const numWins = document.getElementById('wins');
const totalGames = document.getElementById('total-games');

//resets game
const resetButton = document.getElementById('reset-button');


playButton.addEventListener('click', () => {
    console.log('hello button works');
})

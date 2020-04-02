export default function checkResult(playerThrow, computerThrow){
    if (playerThrow === computerThrow) {
        return 'draw';
    }

    if (playerThrow === 'rock' && computerThrow === 'paper') {
        return 'lose';
    } else if (playerThrow === 'scissors' && computerThrow === 'rock') {
        return 'lose';
    } else if (playerThrow === 'paper' && computerThrow === 'scissors') {
        return 'lose';
    } else {
        return 'win';
    }
}
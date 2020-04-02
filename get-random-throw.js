export { getRandomThrow };

let throwValue = 0;

const getRandomThrow = () => {
    throwValue = Math.floor(Math.random() * 3 + 1);
    switch (throwValue) {
        case 1:
            throwValue = 'rock';
            break;
        case 2:
            throwValue = 'paper';
            break;
        case 3:
            throwValue = 'scissors';
            break;
    }
    return throwValue;
};
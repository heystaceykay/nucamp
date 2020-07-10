function rollDice() {
    let goldCoins = 0;
    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        console.log('You rolled a ' + roll + '.');
        console.log('You have ' + goldCoins + ' coins.');
        alert ('You roll a ' + roll + ".");
        if (roll === 1) {
            alert('Game over! No more rolls.');
            break;
        }
        if (roll === 4) {
            alert('You lost a coin!');
            goldCoins -= 1;
        }
        if (roll < 5) {
            continue;
        }
        alert('Congratulations, you win ' + roll + ' gold coins!');
        goldCoins += roll;
    }
    
    if (goldCoins < 0) {
        goldCoins = 0;
    }
    alert('You have won a total of ' + goldCoins + ' gold coins!');
}
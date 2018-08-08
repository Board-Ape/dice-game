let scores, roundScore, activePlayer;

score = [0,0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', rollDie);
document.querySelector('.btn-hold').addEventListener('click', holdScore);
document.querySelector('.btn-new').addEventListener('click', newGame);

document.addEventListener('keydown', keyPress);

function keyPress(event) {
    if (event.keyCode === 32) {
        rollDie();
    }
    if (event.keyCode === 13) {
        holdScore();
    }
    if (event.keyCode === 8) {
        newGame();
    }
}

function rollDie() {
    let dice = Math.floor(Math.random() * 6) + 1
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    if (dice !== 1) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else {
        nextPlayer();
        alert(`You rolled a one. Player ${activePlayer} is up!`);
    }
}

function holdScore() {
    score[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent = score[activePlayer];

    if (document.getElementById('score-' + activePlayer).textContent >= 100) {
        alert(`Player ${activePlayer} is the winner!`);
        location.reload();
    }
    nextPlayer();
}

function newGame() {
    alert('A new game will begin');
    location.reload();
}

function nextPlayer() {
    document.querySelector('#current-' + activePlayer).textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
}
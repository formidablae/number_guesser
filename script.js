let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function getAbsoluteDistance(number, target) {
    if (number < 0 || number > 9) alert("Error: number is not between 0 and 9");
    else return Math.abs(number - target);
}

function compareGuesses(human, computer, secretTarget) {
    const humanDifference = getAbsoluteDistance(human, secretTarget);
    const computerDifference = getAbsoluteDistance(computer, secretTarget);
    if (humanDifference <= computerDifference) return true;
    else return false;
}

function updateScore(winner) {
    if (winner === 'human') humanScore++;
    else if (winner === 'computer') computerScore++;
    else console.log('Error: winner is not human or computer');
}

function advanceRound() {
    currentRoundNumber++;
}

function getComputerChoice() {
    const rand = Math.random();
    if (rand < 0.333) return 'Rock';
    if (rand < 0.666) return 'Paper';
    return 'Scissors';
}

function getHumanChoice() {
    const choice = prompt('Enter Rock, Paper or Scissors').toLowerCase();
    if (choice === 'rock') return 'Rock';
    if (choice === 'paper') return 'Paper';
    return 'Scissors';
}

function playGame() {
    let humanScore = 0, computerScore = 0;

    const playRound = (human, computer) => {
        if (human === computer) return { result: 'tie', message: 'No winner' };
        if ((human === 'Rock' && computer === 'Scissors') ||
            (human === 'Paper' && computer === 'Rock') ||
            (human === 'Scissors' && computer === 'Paper')) {
            return { result: 'win', message: `You win! ${human} beats ${computer}` };
        } else {
            return { result: 'lose', message: `You lose! ${computer} beats ${human}` };
        }
    };

    // Helper function to play a single round
    const playSingleRound = (roundNumber) => {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const { result, message } = playRound(humanSelection, computerSelection);
        
        if (result === 'win') humanScore++;
        if (result === 'lose') computerScore++;
        
        console.log(`Round ${roundNumber}: ${message}`);
        console.log(`Score -> You: ${humanScore}, Computer: ${computerScore}`);
        console.log('');
    };

    // Play 5 rounds
   playSingleRound(1);
   playSingleRound(2);
   playSingleRound(3);
   playSingleRound(4);
   playSingleRound(5);

    // Final Result
    console.log(`Final Score -> You: ${humanScore}, Computer: ${computerScore}`);
    console.log(
        humanScore > computerScore ? 'You win the game!' :
        humanScore < computerScore ? 'Computer wins the game!' :
        'It\'s a tie'
    );

    return { humanScore, computerScore };
}

playGame();


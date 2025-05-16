function getComputerChoice() {
    const rand = Math.random();
    if (rand < 0.333) return `Rock`;
    if (rand < 0.666) return `Paper`;
    return `Scissors`;
}

function getHumanChoice() {
    const choice = prompt(`Enter Rock, Paper or Scissors`).toLowerCase();
    if (choice === `rock`) return `Rock`;
    if (choice === `paper`) return `Paper`;
    return `scissors`;
}

function playGame() {
    let humanScore = 0, computerScore = 0;

    const playRound = (human, computer) =>
        human === computer ? "No winner" :
            (human === "Rock" && computer === "Scissors") ||
                (human === "Paper" && computer === "Rock") ||
                (human === "Scissors" && computer === "Paper") ? "You win" : "You lose!";

    // Round 1
    const humanSelection1 = getHumanChoice();
    const computerSelection1 = getComputerChoice();
    const result1 = playRound(humanSelection1, computerSelection1);
    if (result1 === `You win`) humanScore++;
    if (result1 === `You lose!`) computerScore++;
    console.log(`Round 1: ${result1}`);
    console.log(`Score -> You: ${humanScore}, Computer: ${computerScore}`);

    console.log("");

    // Round 2
    const humanSelection2 = getHumanChoice();
    const computerSelection2 = getComputerChoice();
    const result2 = playRound(humanSelection2, computerSelection2);
    if (result2 === `You win`) humanScore++;
    if (result2 === `You lose!`) computerScore++;
    console.log(`Round 2: ${result2}`)
    console.log(`Score -> You: ${humanScore}, computer: ${computerScore}`)

    console.log("");

    // Round 3
    const humanSelection3 = getHumanChoice();
    const computerSelection3 = getComputerChoice();
    const result3 = playRound(humanSelection3, computerSelection3);
    if (result3 === `You win`) humanScore++;
    if (result3 === `You lose!`) computerScore++;
    console.log(`Round 3: ${result3}`)
    console.log(`Score -> You: ${humanScore}, computer: ${computerScore}`)

    console.log("");

    // Round 4
    const humanSelection4 = getHumanChoice();
    const computerSelection4 = getComputerChoice();
    const result4 = playRound(humanSelection4, computerSelection4);
    if (result4 === `You win`) humanScore++;
    if (result4 === `You lose!`) computerScore++;
    console.log(`Round 4: ${result4}`)
    console.log(`Score -> You: ${humanScore}, computer: ${computerScore}`)

    console.log("");

    // Round 5
    const humanSelection5 = getHumanChoice();
    const computerSelection5 = getComputerChoice();
    const result5 = playRound(humanSelection3, computerSelection3);
    if (result5 === `You win`) humanScore++;
    if (result5 === `You lose!`) computerScore++;
    console.log(`Round 5: ${result5}`)
    console.log(`Score -> You: ${humanScore}, computer: ${computerScore}`)

    console.log("");


    // Final Result
    console.log(`Final Score -> You: ${humanScore}, computer: ${computerScore}`);
    console.log(
        humanScore > computerScore ? `You win the game!` :
            humanScore < computerScore ? `Computer wins the game!` :
                `it's a tie`
    );

    return { humanScore, computerScore };
}

playGame();



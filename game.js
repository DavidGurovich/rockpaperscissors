
let playerScore = 0;
let computerScore = 0;


function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let turn = choices[Math.floor(Math.random() * choices.length)]
    return turn
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors'){
        playerScore += 1;
        return("You win! Rock beats scissors!")}   

    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore += 1;
        return("You win! Paper beats Rock!")
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore += 1;
        return("You win! Scissors beats Paper!")
    }    
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore += 1;
        return("You lose! Rock beats Scissors!")
    }   
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore += 1;
        return("You lose! Paper beats Rock!")
    }   
    else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
        computerScore += 1;
        return("You lose! Scissors beats Paper!")
    }
    else if (playerSelection === null){
        computerScore += 1;
        return("Please make a selection")
    }
    else {
        return ("You and the computer made the same choice!")
    }   
}


function game () {
    
    

    playerSelection = (prompt("Rock, Paper, or Scissors?")).toLowerCase();
    console.log(playRound(playerSelection, computerSelection = computerPlay()))
    console.log(`${computerScore} ${playerScore}`)
       
    playerSelection = (prompt("Rock, Paper, or Scissors?")).toLowerCase();
    console.log(playRound(playerSelection, computerSelection = computerPlay()))
    console.log(`${computerScore} ${playerScore}`)
    
    playerSelection = (prompt("Rock, Paper, or Scissors?")).toLowerCase();
    console.log(playRound(playerSelection, computerSelection = computerPlay()))
    console.log(`${computerScore} ${playerScore}`)
    }  
    playerSelection = (prompt("Rock, Paper, or Scissors?")).toLowerCase();
    console.log(playRound(playerSelection, computerSelection = computerPlay()))
    console.log(`${computerScore} ${playerScore}`) 
    playerSelection = (prompt("Rock, Paper, or Scissors?")).toLowerCase();
    console.log(playRound(playerSelection, computerSelection = computerPlay()))
    console.log(`${computerScore} ${playerScore}`)
    
   
game()


/* CHECK! computer will choose a weapon randomly 
CHECK! when player inputs its chosen weapon
the program compares the weapons statings that rock beats scissors, scissors beats paper and paper beats rock
comparison will return who won the round, if weapons are the same, it's a tie
and add up 1 point to the winners score counter. if its a tie, nothing is added
repeat process until either player or computer get to score = 5
when game ends, state the winner
give the option to play again */ 

let randomNumber = Math.random();
console.log (randomNumber);

let computerChoice = ""
function getComputerChoice () {
    if (randomNumber <= 0.33) {
        computerChoice = "rock"
    } else if (randomNumber <= 0.66) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }

    return computerChoice;
}

getComputerChoice ();
console.log (computerChoice);

let playerChoice = prompt('Choose rock, paper or scissors').toLowerCase();
console.log (playerChoice);

let result = ""
function playRound (playerChoice, computerChoice) {
    switch (true) {
        case (playerChoice == "rock" && computerChoice == "scissors"):
            result = ('You win! Rock beats Scissors!');
            break;
        case (playerChoice == "rock" && computerChoice == "paper"):
            result = ('You lose! Paper beats Rock!');
            break;
        case (playerChoice == "paper" && computerChoice == "rock"):
            result =  ('You win! Paper beats Rock!');
            break;   
        case (playerChoice == "paper" && computerChoice == "scissors"):
            result =  ('You lose! Scissor beats Paper!');
            break;
        case (playerChoice == "scissors" && computerChoice == "paper"):
            result = ('You win! Scissors beats Paper!');
            break;
        case (playerChoice == "scissors" && computerChoice == "rock"):
            result =  ('You lose! Rock beats Scissors!');
            break;
        case (playerChoice !== "rock" || "paper" || "scissors"):
            result =  ('Oh-oh! Something went wrong, probably a typo. Try again :)');
            break;
        case (playerChoice == computerChoice):
            result = ('It\'s a tie!');
            break;                      
    }

    return result;
}

playRound(playerChoice, computerChoice);
console.log (result);
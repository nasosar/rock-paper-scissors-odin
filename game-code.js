/* CHECK! computer will choose a weapon randomly 
CHECK! when player inputs its chosen weapon
CHECK! the program compares the weapons statings that rock beats scissors, scissors beats paper and paper beats rock
CHECK! comparison will return who won the round, if weapons are the same, it's a tie
CHECK! and add up 1 point to the winners score counter. if its a tie, nothing is added
CHECK! repeat process until either player or computer get to score = 5
CHECK! when game ends, state the winner */ 

let computerChoice = ""
let playerChoice = ""
let result = ""
let playerScore = 0
let computerScore = 0

/*function getPlayerChoice () {
    playerChoice = prompt('Choose rock, paper or scissors').toLowerCase();
    return playerChoice;
}*/

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', e => {
    playerChoice = (button.id);

    if (playerChoice == 'rock') {
        button.classList.add('rockpressed');
    } else if (playerChoice == 'paper') {
        button.classList.add('paperpressed');
    } else {
        button.classList.add('scissorspressed');
    } 

    game();
  });
});

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('rockpressed','paperpressed','scissorspressed');
}

buttons.forEach(button => button.addEventListener('transitionend', removeTransition));

function getPlayerChoice () {    
    return playerChoice;
}



function getComputerChoice () {
    let randomNumber = Math.random();
    if (randomNumber <= 0.33) {
        computerChoice = "rock"
    } else if (randomNumber <= 0.66) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }
    return computerChoice;
}

function playRound (playerChoice, computerChoice) {

    switch (true) {
        case (playerChoice == undefined && computerChoice == undefined):
            result = ("ERROR!");
            break;
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
            result =  ('You lose! Scissors beats Paper!');
            break;
        case (playerChoice == "scissors" && computerChoice == "paper"):
            result = ('You win! Scissors beats Paper!');
            break;
        case (playerChoice == "scissors" && computerChoice == "rock"):
            result =  ('You lose! Rock beats Scissors!');
            break;
        case (playerChoice === computerChoice):
            result = ('It\'s a tie!');
            break;
        case (playerChoice !== "rock" || "paper" || "scissors"):
            result =  ('Oh-oh! Something went wrong, probably a typo. Try again :)');
            break;                      
    }

    return result;
}

function game() {
   /* while (computerScore < 5 && playerScore < 5) {
        getPlayerChoice (); */
        getComputerChoice ();
        /* AQUI: FUNÇAO DE DISPLAY DA IMAGEM DO JOGADOR*/
        playRound (playerChoice, computerChoice);
        /* AQUI: FUNÇÃO DO DISPLAY DA IMAGEM DO COMPUTADOR */
        if (computerScore == 5 || playerScore == 5) {
            gameOver();
        } else if (result.includes('win')) {
            playerScore += 1;
        } else if (result.includes('lose')){
            computerScore += 1;
        }
        /*AQUI: FUNÇÃO QUE MOSTRA PONTOS*/
        /*AQUI FUNÇÃO QUE TROCA A FRASE DO TOPO PELO RESULTADO */
        console.log ('You chose ' + playerChoice + '.');
        console.log ('Your opponent chose ' + computerChoice + '.');
        console.log (result);
        console.log ('Your score: ' + playerScore)
        console.log ('Opponent\'s score: ' + computerScore)
        console.log ('');
    /*}*/

    return playerScore, computerScore;
}

function gameOver() {
    if (playerScore == 5) {
        console.log ("Yay! You beat them, congrats :)");
    } else {
        console.log ("Oh no, you lost this time :(");
    }
}


/*console.log ("Let's begin. First player to score 5 points wins!");
game();
console.log('FINAL SCORES: YOU ' + playerScore + ' vs OPPONENT ' + computerScore);
gameOver(); */
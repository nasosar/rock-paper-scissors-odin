

let computerChoice = ""
let playerChoice = ""
let result = ""
let playerScore = 0
let computerScore = 0

/*When a button is clicked, it makes the player choice and calls the game function*/
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

/*Aditional functions regarding the buttons effects*/
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('rockpressed','paperpressed','scissorspressed');
}

buttons.forEach(button => button.addEventListener('transitionend', removeTransition));

function getPlayerChoice () {    
    return playerChoice;
}


/*In game: this function gets the computer choice*/
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

/*In game: this function shows the players choice on the UI*/
function displayPlayerChoice () {
    const playerDisplay = document.querySelector('#imgPlayer');

    playerDisplay.classList.remove('ocult');

    if (playerChoice == 'rock') {       
        playerDisplay.src = 'img/rock-player.png';
    } else if (playerChoice == 'paper') {
        playerDisplay.src = 'img/paper-player.png';
    } else {
        playerDisplay.src = 'img/scissors-player.png';
    } 
}

/*In game: this function shows the machines choice on the UI*/
function displayMachineChoice () {
    const machineDisplay = document.querySelector('#imgMachine');

    machineDisplay.classList.remove('ocult');

    if (computerChoice == 'rock') {       
        machineDisplay.src = 'img/rock-machine.png';
    } else if (computerChoice == 'paper') {
        machineDisplay.src = 'img/paper-machine.png';
    } else {
        machineDisplay.src = 'img/scissors-machine.png';
    } 
}

/*In game: this function shows the score counts on the UI*/
function showScore () {
    document.querySelector('#playerscore').innerHTML = ('YOU: ' + playerScore);
    document.querySelector('#machinescore').innerHTML= ('MACHINE: ' + computerScore);
}

/*In game: this function verifies who wins the round and returns the result*/
function playRound (playerChoice, computerChoice) {

    switch (true) {
        case (playerChoice == undefined && computerChoice == undefined):
            result = ("ERROR!");
            break;
        case (playerChoice == "rock" && computerChoice == "scissors"):
            result = ('YOU WIN! ROCK BEATS SCISSORS!');
            break;
        case (playerChoice == "rock" && computerChoice == "paper"):
            result = ('YOU LOSE! PAPER BEATS ROCK!');
            break;
        case (playerChoice == "paper" && computerChoice == "rock"):
            result =  ('YOU WIN! PAPER BEATS ROCK!');
            break;   
        case (playerChoice == "paper" && computerChoice == "scissors"):
            result =  ('YOU LOSE! SCISSORS BEATS PAPER!');
            break;
        case (playerChoice == "scissors" && computerChoice == "paper"):
            result = ('YOU WIN! SCISSORS BEATS PAPER!');
            break;
        case (playerChoice == "scissors" && computerChoice == "rock"):
            result =  ('YOU LOSE! ROCK BEATS SCISSORS!');
            break;
        case (playerChoice === computerChoice):
            result = ('IT\'S A TIE!');
            break;
        case (playerChoice !== "rock" || "paper" || "scissors"):
            result =  ('Oh-oh! Something went wrong, probably a typo. Try again :)');
            break;                      
    }

    return result;
}

/*In game: this function show the result on the UI*/
function resultPhrase () {
    document.querySelector('.subtitle').innerHTML = result;
}

/*In game: this function changes the page to the one of the game over pages when someone scores 5 points*/
function gameOver() {
    document.location.href='game-over-page/index.html';

    if (playerScore > computerScore) {
        document.location.href='you-win-page/index.html';
    } else {
        document.location.href='you-lose-page/index.html';
    }
}


/*This function makes the game happen :) */
function game() {

    getComputerChoice ();

    displayPlayerChoice ();

    playRound (playerChoice, computerChoice);

    displayMachineChoice ();

    if (result.includes('WIN')) {
        playerScore += 1;
    } else if (result.includes('LOSE')){
        computerScore += 1;
    }

    showScore ();

    resultPhrase ();

    if (computerScore == 5 || playerScore == 5) {
        setTimeout(gameOver, 200);
    }
  
    return playerScore, computerScore;
}


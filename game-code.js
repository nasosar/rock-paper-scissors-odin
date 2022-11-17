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

function showScore () {
    document.querySelector('#playerscore').innerHTML = ('YOU: ' + playerScore);
    document.querySelector('#machinescore').innerHTML= ('MACHINE: ' + computerScore);
}


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

function resultPhrase () {
    document.querySelector('.subtitle').innerHTML = result;
}

// FIX THE FUCTION TO CHANGE THE PLACEHOLDER TEXT 
function gameOver() {
    document.location.href='game-over-page/index.html';
    testfunction ();
    const resultPhrase = document.getElementById('finalresult');
    console.log (resultPhrase);
    console.log ('olar');

    if (playerScore == 5) {
        document.querySelector('#finalresult').innerHTML = 'YOU BEAT THEM, YAY :)';
        console.log ("Yay! You beat them, congrats :)");
    } else {
        document.querySelector('#finalresult').innerHTML = 'OH NO, YOU LOST :(';
        console.log ("Oh no, you lost this time :(");
    }
}

function testfunction () {
    document.querySelector('.finalresult').innerHTML = 'FINGE QUE É UMA SEMENTE';
}


function game() {
        getComputerChoice ();
        /* AQUI: FUNÇAO DE DISPLAY DA IMAGEM DO JOGADOR*/
        displayPlayerChoice ();
        playRound (playerChoice, computerChoice);
        /* AQUI: FUNÇÃO DO DISPLAY DA IMAGEM DO COMPUTADOR */
        displayMachineChoice (); 
        
        if (computerScore == 4 || playerScore == 4) {
            gameOver();
        } else if (result.includes('WIN')) {
            playerScore += 1;
        } else if (result.includes('LOSE')){
            computerScore += 1;
        };

        /*AQUI: FUNÇÃO QUE MOSTRA PONTOS*/
        showScore ();
        /*AQUI FUNÇÃO QUE TROCA A FRASE DO TOPO PELO RESULTADO */
        resultPhrase ();

        console.log ('You chose ' + playerChoice + '.');
        console.log ('Your opponent chose ' + computerChoice + '.');
        console.log (result);
        console.log ('Your score: ' + playerScore)
        console.log ('Opponent\'s score: ' + computerScore)
        console.log ('');
    /*}*/

    return playerScore, computerScore;
}




/*console.log ("Let's begin. First player to score 5 points wins!");
game();
console.log('FINAL SCORES: YOU ' + playerScore + ' vs OPPONENT ' + computerScore);
gameOver(); */
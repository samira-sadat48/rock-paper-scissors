//Computer Play
function computerPlay()
{
    let computerSelection = getRandomInt(3); //random number 0-2

    switch(computerSelection)
    {
        case 0 :
            return "rock";
            break;
        case 1 :
            return "paper";
            break;
        case 2 :
            return "scissors";
            break;
        default:
            return "Not a valid selection";//throw an error?
    }
}

//From MDN Web Docs. Returns number from 0 to max-1
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

//Single Round
function playRound(playerSelection,computerSelection)
{
    let results;

    //Add a check for an invalid selection?

    if(playerSelection === computerSelection)
    {
        results = `${playerSelection} ties with ${computerSelection}. Play again!`;
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") ||
             (playerSelection === "paper" && computerSelection === "rock") ||
             (playerSelection === "scissors" && computerSelection === "paper"))
    {
        results = `You win! ${playerSelection} beats ${computerSelection}!`;
    }
    else
    {
        results = `You lose! ${computerSelection} beats ${playerSelection}`;
    }

    return results;
}

const playerSelection = "scissors";
const computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection));
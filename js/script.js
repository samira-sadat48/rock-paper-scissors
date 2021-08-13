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

//Single Round - changed to an event callback
function playRound(e)
{
    let results;
    let computerSelection = computerPlay();
    let playerSelection = e.currentTarget.innerText;//button.textContent; how to get the text from button? id? get text function?

    //convert to lowercase so players can enter any case without error
    playerSelection = playerSelection.toLowerCase();

    //check for an invalid selection
    if(!((playerSelection == "rock" )||
       (playerSelection == "scissors") ||
       (playerSelection == "paper")))
    {
        throw `${playerSelection} is not a valid selection! Check spelling and play again.`;
    }

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

    console.log(results);
    return results;
}

function game(playerSelection, computerSelection)
{
    let playerCounter = 0;
    let computerCounter = 0;

    while((playerCounter !== 5) || (computerCounter !== 5))
    {
        //Change this to be the button feedback
        //let playerSelection = prompt("It's your turn! Rock, Paper, or Scissors?");
        let computerSelection = computerPlay();

        //Single Round Result
        let roundResultString = playRound(playerSelection,computerSelection);

        if (roundResultString.includes("win"))
        {
            playerCounter++;
        }
        else if (roundResultString.includes("lose"))
        {
            computerCounter++;
        }

        console.log(roundResultString);
    }
    //Entire Game result
    if(playerCounter > computerCounter)
    {
        console.log("You win this game!");
    }
    else if (computerCounter > playerCounter)
    {
        console.log("You lose this game!");
    }
    else
    {
        console.log("This game is tied!");
    }
}

//game();
//Play a round when a button is clicked

const buttons = document.getElementsByClassName("rps-button");

for(let i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener('click', playRound, false);
}





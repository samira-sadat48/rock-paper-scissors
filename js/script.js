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

console.log(computerPlay());
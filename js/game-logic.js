// Player one move types
let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;

// Player one move values
let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;

// Player two move types
let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;

// Player two move values
let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

//
function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue,
              moveThreeType, moveThreeValue)
{
    if ( player === 'Player One') {
      playerOneMoveOneType = moveOneType;
      playerOneMoveOneValue = moveOneValue;
      playerOneMoveTwoType = moveTwoType;
      playerOneMoveTwoValue = moveTwoValue;
      playerOneMoveThreeType = moveThreeType;
      playerOneMoveThreeValue = moveThreeValue;
    } else if (player === 'Player Two') {
      playerTwoMoveOneType = moveOneType;
      playerTwoMoveOneValue = moveOneValue;
      playerTwoMoveTwoType = moveTwoType;
      playerTwoMoveTwoValue = moveTwoValue;
      playerTwoMoveThreeType = moveThreeType;
      playerTwoMoveThreeValue = moveThreeValue;
    } else {
      playerOneMoveOneType = undefined;
      playerOneMoveOneValue = undefined;
      playerOneMoveTwoType = undefined;
      playerOneMoveTwoValue = undefined;
      playerOneMoveThreeType = undefined;
      playerOneMoveThreeValue = undefined;

      playerTwoMoveOneType = undefined;
      playerTwoMoveOneValue = undefined;
      playerTwoMoveTwoType = undefined;
      playerTwoMoveTwoValue = undefined;
      playerTwoMoveThreeType = undefined;
      playerTwoMoveThreeValue = undefined;
    }

}

function getRoundWinner(roundNumber)
{

    if(roundNumber === 1) {
        playerOneMoveOneValue > playerTwoMoveOneValue ? 'Player One' : 'Player Two';

      if(playerOneMoveOneType === 'rock' && playerTwoMoveOneType === 'paper') {
        return 'Player Two';
      } else if (playerOneMoveOneType === 'scissors' && playerTwoMoveOneType === 'rock') {
        return 'Player Two';
      } else if (playerOneMoveOneType === 'paper' && playerTwoMoveOneType === 'scissors') {
        return 'Player Two';
      } else if (playerOneMoveOneType === playerTwoMoveOneType && playerOneMoveOneValue
                  === playerTwoMoveOneValue) {
          return 'Tie';
        } else if (playerOneMoveOneType === playerTwoMoveOneType && playerOneMoveOneValue
                    < playerTwoMoveOneValue) {
          return 'Player Two'; }
        return 'Player One';
      }


    if(roundNumber === 2) {

        playerOneMoveTwoValue > playerTwoMoveOneValue ? 'Player One' : 'Player Two';

        if(playerOneMoveTwoType === 'rock' && playerTwoMoveTwoType === 'pape') {
        return 'Player Two';
      } else if (playerOneMoveTwoType === 'scissors' && playerTwoMoveTwoType === 'rock') {
        return 'Player Two';
      } else if (playerOneMoveTwoType === 'paper' && playerTwoMoveTwoType === 'scissors') {
        return 'Player Two';
      }
      else if (playerOneMoveTwoType === playerTwoMoveTwoType && playerOneMoveTwoValue
                 === playerTwoMoveTwoValue) {
         return 'Tie';
       } else if (playerOneMoveTwoType === playerTwoMoveTwoType && playerOneMoveTwoValue
                   < playerTwoMoveTwoValue) {
         return 'Player Two';
       }
        return 'Player One';
      }


    if(roundNumber === 3) {

       playerOneMoveThreeValue > playerTwoMoveThreeValue ? 'Player One' : 'Player Two';

       if(playerOneMoveThreeType === 'rock' && playerTwoMoveThreeType === 'paper') {
          return 'Player Two';
      } else if (playerOneMoveThreeType === 'scissors' && playerTwoMoveThreeType === 'rock') {
          return 'Player Two';
      } else if (playerOneMoveThreeType === 'paper' && playerTwoMoveThreeType === 'scissors') {
        return 'Player Two';
      } else if(playerOneMoveThreeType === playerTwoMoveThreeType && playerOneMoveThreeValue
                  === playerTwoMoveThreeValue) {
          return 'Tie';
        } else if (playerOneMoveThreeType === playerTwoMoveThreeType && playerOneMoveThreeValue
                    < playerTwoMoveThreeValue) {
          return 'Player Two';
                  }
        return 'Player One';

      }
}




function getGameWinner()
{
    let winnerRoundOne = getRoundWinner(1);
    let winnerRoundTwo = getRoundWinner(2);
    let winnerRoundThree = getRoundWinner(3);
    let valuePlayerOne = playerOneMoveOneValue + playerOneMoveTwoValue + playerOneMoveThreeValue;
    let valuePlayerTwo = playerTwoMoveOneValue + playerTwoMoveTwoValue + playerOneMoveThreeValue;
    let scorePlayerOne = 0;
    let scorePlayerTwo = 0;
    let overallWinner = ' ';

      winnerRoundOne === 'Player Two' ? scorePlayerTwo++ : scorePlayerOne++;
      winnerRoundTwo === 'Player Two' ? scorePlayerTwo++ : scorePlayerOne++;
      winnerRoundThree === 'Player Two' ? scorePlayerTwo++ : scorePlayerOne++;

      if (scorePlayerTwo > scorePlayerOne || valuePlayerTwo > valuePlayerOne) {
           overallWinner = 'Player Two';
      } else if (scorePlayerOne > scorePlayerTwo || valuePlayerOne > valuePlayerTwo) {
           overallWinner = 'Player One'
      } else if (scorePlayerOne === scorePlayerTwo && valuePlayerOne === valuePlayerTwo) {
          overallWinner = 'Tie';
      }

      return overallWinner;
}

function setComputerMoves()
{

}

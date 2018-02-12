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
    if (moveOneType === undefined || moveTwoType === undefined  || moveThreeType === undefined ) {
      return undefined;
    }
    if (  moveOneType != 'rock' && moveOneType != 'scissors' && moveOneType != 'paper' ||
            moveTwoType != 'rock' && moveTwoType != 'scissors' && moveTwoType != 'paper' ||
          moveThreeType != 'rock' && moveThreeType != 'scissors' && moveThreeType != 'paper' ||
          moveOneValue < 1 || moveOneValue > 99 || moveTwoValue < 1 || moveTwoValue > 99 || moveThreeValue < 1
             || moveThreeValue > 99) {
            return undefined;
          }
    if(moveOneValue === undefined || moveTwoValue === undefined || moveThreeValue === undefined ) {
      return undefined;
    }

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
    } else if (player === null)  {
       return null;
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

        if(playerOneMoveTwoType === 'rock' && playerTwoMoveTwoType === 'paper') {
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
    let scorePlayerOne = 0;
    let scorePlayerTwo = 0;
    const playerTie = 'Tie';

    for (let i = 1; i < 4 ; i++) {
      if (getRoundWinner(i) === 'Player One' ) {
        scorePlayerOne++;
      } else if (getRoundWinner(i) === 'Player Two') {
        scorePlayerTwo++;
      } else if (getRoundWinner(i) === 'Tie' && playerOneMoveThreeValue > playerTwoMoveThreeValue) {
        scorePlayerOne++;
      } else if (getRoundWinner(i) === 'Tie' && playerTwoMoveThreeValue > playerOneMoveThreeValue) {
        scorePlayerTwo++;
      }  else if (getRoundWinner(i) === 'Tie' && playerOneMoveThreeValue === playerTwoMoveThreeValue)  {
        playerTie;
      }


    //  console.log()
     //console.log(`Round ${i} Winner:  ${getRoundWinner(i)}`);
     //console.log(` Player Two Score: ${scorePlayerTwo}`);
      //console.log( ` Player One Score: ${scorePlayerOne}`);
    }

    if (scorePlayerOne > scorePlayerTwo) {
      return 'Player One';
    } else if (scorePlayerTwo > scorePlayerOne) {
      return 'Player Two';
    } else {
      return playerTie;
    }




}

function setComputerMoves()
{

}

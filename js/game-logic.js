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
     let sumOfValues = moveOneValue + moveTwoValue + moveThreeValue;

     if(moveOneValue === undefined || moveTwoValue === undefined || moveThreeValue === undefined ) {
       moveOneValue = undefined;
       moveTwoValue = undefined;
       moveThreeValue = undefined;
     } else if (moveOneType === undefined || moveTwoType === undefined  || moveThreeType === undefined ) {
      moveOneType = undefined;
      moveTwoType = undefined;
      moveThreeType = undefined;
    } else if (  moveOneType != 'rock' && moveOneType != 'scissors' && moveOneType != 'paper' ||
          moveTwoType != 'rock' && moveTwoType != 'scissors' && moveTwoType != 'paper' ||
          moveThreeType != 'rock' && moveThreeType != 'scissors' && moveThreeType != 'paper' ||
          moveOneValue < 1 || moveOneValue > 99 || moveTwoValue < 1 || moveTwoValue > 99 || moveThreeValue < 1
             || moveThreeValue > 99 || sumOfValues > 99) {
               moveOneValue = undefined;
               moveTwoValue = undefined;
               moveThreeValue = undefined;
               moveOneType = undefined;
               moveTwoType = undefined;
               moveThreeType = undefined;
    } else if ( player === 'Player One') {
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
       player = null;
    }

}


function getRoundWinner(roundNumber)
{
  if(roundNumber === 1)  {
        if (playerOneMoveOneType != undefined && playerOneMoveOneValue != undefined &&
            playerTwoMoveOneType != undefined && playerTwoMoveOneValue != undefined) {
              if(playerOneMoveOneType === 'paper' && playerTwoMoveOneType === 'rock') {
                  return 'Player One';
              } else if (playerOneMoveOneType === 'rock' && playerTwoMoveOneType === 'scissors') {
                  return 'Player One';
              } else if (playerOneMoveOneType === 'scissors' && playerTwoMoveOneType === 'paper') {
                  return 'Player One';
              } else if (playerOneMoveOneType === playerTwoMoveOneType && playerOneMoveOneValue
                  === playerTwoMoveOneValue) {
                    return 'Tie';
              } else if (playerOneMoveOneType === playerTwoMoveOneType && playerOneMoveOneValue
                    > playerTwoMoveOneValue) {
                    return 'Player One';
              } else {
                    return 'Player Two';
              }
        } else {
          return null;
      }
   } else

       if(roundNumber === 2 ) {
         if (playerOneMoveTwoType != undefined && playerOneMoveTwoValue != undefined &&
             playerTwoMoveTwoType != undefined && playerTwoMoveTwoValue != undefined) {
              if(playerOneMoveTwoType === 'paper' && playerTwoMoveTwoType === 'rock') {
                  return 'Player One';
              } else if (playerOneMoveTwoType === 'rock' && playerTwoMoveTwoType === 'scissors') {
                  return 'Player One';
              } else if (playerOneMoveTwoType === 'scissors' && playerTwoMoveTwoType === 'paper') {
                  return 'Player One';
              }
                else if (playerOneMoveTwoType === playerTwoMoveTwoType && playerOneMoveTwoValue
                  === playerTwoMoveTwoValue) {
                  return 'Tie';
              } else if (playerOneMoveTwoType === playerTwoMoveTwoType && playerOneMoveTwoValue
                  > playerTwoMoveTwoValue) {
                 return 'Player One';
              } else {
                 return 'Player Two';
        }
     } else {
       return null;
     }
   } else

   if(roundNumber === 3  ) {
     if (playerOneMoveThreeType != undefined && playerOneMoveThreeValue != undefined &&
        playerTwoMoveThreeType != undefined && playerTwoMoveThreeValue != undefined) {
       if(playerOneMoveThreeType === 'paper' && playerTwoMoveThreeType === 'rock') {
          return 'Player One';
      } else if (playerOneMoveThreeType === 'rock' && playerTwoMoveThreeType === 'scissors') {
          return 'Player One';
      } else if (playerOneMoveThreeType === 'scissors' && playerTwoMoveThreeType === 'paper') {
        return 'Player One';
      } else if(playerOneMoveThreeType === playerTwoMoveThreeType && playerOneMoveThreeValue
                  === playerTwoMoveThreeValue) {
          return 'Tie';
        } else if (playerOneMoveThreeType === playerTwoMoveThreeType && playerOneMoveThreeValue
                    > playerTwoMoveThreeValue) {
          return 'Player One';
        } else {
          return 'Player Two';
        }
    } else {
      return null;
    }
  } else {
  return null;
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
      } else {
        return null;
      }

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
    setPlayerMoves('Player Two', 'rock', 33, 'paper', 22, 'scissors', 44);   
}

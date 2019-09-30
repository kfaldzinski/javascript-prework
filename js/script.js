let playerMove, computerMove, playerPoints = 0, computerPoints = 0;
const buttonRock = document.getElementById('button-rock'), buttonPaper = document.getElementById('button-paper'), buttonScissors = document.getElementById('button-scissors');

function getMoveName(moveId) {

  console.log('wywołano funkcję getMoveName z argumentem: ' + moveId);

  if (moveId == 1) {
    return 'kamień';
  } else if (moveId == 2) {
    return 'papier';
  } else if (moveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + moveId + '. Domyślnie wybrano "kamień".');
    return 'kamień';
  }
}

function displayResult(playerMove, computerMove) {

  console.log('wywołano funkcję displayResults z argumentami: ' + playerMove + ', ' + computerMove);

  if (playerMove == 'papier' && computerMove == 'kamień') {
    printMessage('Wygrywasz!', 'messages'  );
    playerPoints = playerPoints +1;
  } else if (playerMove == 'kamień' && computerMove == 'nożyce') {
    printMessage('Wygrywasz!', 'messages'  );
    playerPoints = playerPoints +1;
  } else if (playerMove == 'nożyce' && computerMove == 'papier') {
    printMessage('Wygrywasz!', 'messages'  );
    playerPoints = playerPoints +1;
  } else if (playerMove == computerMove) {
    printMessage('Remis!', 'messages'  );
  } else {
    printMessage('Przegrywasz :(', 'messages' );
    computerPoints = computerPoints +1;
  }
  
  printMessage(calculateResult(computerMove, playerMove), 'messages' );
  clearMessages('result');
  printMessage(playerPoints + ' - ' + computerPoints, 'result');
}

function buttonClicked(argButtonName){
    clearMessages('messages');
    console.log(argButtonName + ' został kliknięty');
    playerMove = argButtonName;
    /*playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    console.log('wybór ruchu gracza to: ' + playerInput);
    playerMove = getMoveName(playerInput);*/
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
}

buttonRock.addEventListener('click', function(){
    buttonClicked('kamień')
});
buttonPaper.addEventListener('click', function(){
    buttonClicked('papier')
});
buttonScissors.addEventListener('click', function(){
    buttonClicked('nożyce')
});
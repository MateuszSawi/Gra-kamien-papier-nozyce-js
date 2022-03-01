let buttonRock, buttonPaper, buttonScissors;

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName){
    clearMessages();
    console.log(argButtonName + ' został kliknięty');

    let randomNumber, computerMove, playerMove;

    randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    playerMove = argButtonName;
    
    function gameResult(player, comp){
        if (player == comp){
            printMessage('Remis');
        } else if (player == 'kamień' && comp == 'nożyce'){
            printMessage('Wygrałeś');
        } else if (player == 'papier' && comp == 'kamień'){
            printMessage('Wygrałeś');
        } else if (player == 'nożyce' && comp == 'papier'){
            printMessage('Wygrałeś');
        } else {
            printMessage('Przegrałeś');
        }
    }

    printMessage('Twój ruch: ' + playerMove);

    if (randomNumber == 1){
        computerMove = 'kamień';
        printMessage('Komputer wybrał kamień');
    } else if (randomNumber == 2) {
        computerMove = 'papier';
        printMessage('Komputer wybrał papier');
    } else if (randomNumber == 3){
        computerMove = 'nożyce';
        printMessage('Komputer wybrał nożyce');
    }

    gameResult(playerMove, computerMove);

}

buttonRock.addEventListener('click', function(){
    buttonClicked('kamień');
});
buttonPaper.addEventListener('click', function(){
    buttonClicked('papier');
});
buttonScissors.addEventListener('click', function(){
    buttonClicked('nożyczki');
});





















































/*let randomNumber, computerMove, playerMove, playerInpu, player, comp;

randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

playerMove = argButtonName;

if (playerInput == '1') {
    playerMove = 'kamień';
} else if (playerInput == '2'){
    playerMove = 'papier';
} else if (playerInput == '3'){
    playerMove = 'nożyce';
}

console.log('Twój ruch: ' + playerMove);

function gameResult(player, comp){
    if (player == comp){
        printMessage('Remis');
    } else if (player == 'kamień' && comp == 'nożyce'){
        printMessage('Wygrałeś');
    } else if (player == 'papier' && comp == 'kamień'){
        printMessage('Wygrałeś');
    } else if (player == 'nożyce' && comp == 'papier'){
        printMessage('Wygrałeś');
    } else {
        printMessage('Przegrałeś');
    }
}

printMessage('Twój ruch: ' + playerMove);

if (randomNumber == 1){
    computerMove = 'kamień';
	printMessage('Komputer wybrał kamień');
} else if (randomNumber == 2) {
    computerMove = 'papier';
	printMessage('Komputer wybrał papier');
} else if (randomNumber == 3){
    computerMove = 'nożyce';
	printMessage('Komputer wybrał nożyce');
}

gameResult(playerMove, computerMove);

*/





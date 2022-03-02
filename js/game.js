//let buttonRock, buttonPaper, buttonScissors;
const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');
function buttonClicked(argButtonName){
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
    //const computerMove;
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    //playerMove = argButtonName;
    function gameResult(player, comp){
        if (randomNumber == 1){
            comp = 'kamień';
            printMessage('Komputer wybrał kamień');
        } else if (randomNumber == 2) {
            comp = 'papier';
            printMessage('Komputer wybrał papier');
        } else if (randomNumber == 3){
            comp = 'nożyce';
            printMessage('Komputer wybrał nożyce');
        }
        
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
    printMessage('Twój ruch: ' + argButtonName);
    /*if (randomNumber == 1){
        computerMove = 'kamień';
        printMessage('Komputer wybrał kamień');
    } else if (randomNumber == 2) {
        computerMove = 'papier';
        printMessage('Komputer wybrał papier');
    } else if (randomNumber == 3){
        computerMove = 'nożyce';
        printMessage('Komputer wybrał nożyce');
    }*/
    gameResult(argButtonName);
}
buttonRock.addEventListener('click', function(){
    buttonClicked('kamień');
});
buttonPaper.addEventListener('click', function(){
    buttonClicked('papier');
});
buttonScissors.addEventListener('click', function(){
    buttonClicked('nożyce');
});





















































/*

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName){
    clearMessages();
    console.log(argButtonName + ' został kliknięty');

    let computerMove, randomNumber, playerMove;

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
    buttonClicked('nożyce');
});

*/





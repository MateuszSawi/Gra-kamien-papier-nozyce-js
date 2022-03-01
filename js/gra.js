var RandomNumber, ComputerMove, PlayerMove, PlayerInput, player, copm;
RandomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + RandomNumber);

PlayerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + PlayerInput);

if (PlayerInput == '1') {
  PlayerMove = 'kamień';
} 
else if (PlayerInput == '2'){
  PlayerMove = 'papier';
}
else if (PlayerInput == '3'){
    PlayerMove = 'nożyce';
}

console.log('Twój ruch: ' + PlayerMove);

function GameResult(player, comp){
    if (player == comp){
        printMessage('Remis');
    }
    else if (player == 'kamień' && comp == 'nożyce'){
        printMessage('Wygrałeś');
    }
    else if (player == 'kamień' && comp == 'papier'){
        printMessage('Przegrałes');
    }
    else if (player == 'papier' && comp == 'kamień'){
        printMessage('Wygrałeś');
    }
    else if (player == 'papier' && comp == 'nożyce'){
        printMessage('Przegrałeś');
    }
    else if (player == 'nożyce' && comp == 'kamień'){
        printMessage('Przegrałeś');
    }
    else if (player == 'nożyce' && comp == 'papier'){
        printMessage('Wygrałeś');
    }
}

printMessage('Twój ruch: ' + PlayerMove);

if(RandomNumber == 1){
    ComputerMove = 'kamień';
	printMessage('Komputer wybrał kamień');
} 
else if (RandomNumber == 2) {
    ComputerMove = 'papier';
	printMessage('Komputer wybrał papier');
} 
else if (RandomNumber == 3){
    ComputerMove = 'nożyce';
	printMessage('Komputer wybrał nożyce');
}

GameResult(PlayerMove, ComputerMove);
import Game from "./game.js"; 
import View from "./view.js"; 

let game = new Game(); 

let gameView = new View(document.getElementById("gameBoard")); 

gameView.clickTile = function (i) { 
    game.move(i); 
    gameView.updateBoard(game); 
}; 

gameView.restart = function () {  
    game = new Game(); 
    gameView.updateBoard(game); 
}; 
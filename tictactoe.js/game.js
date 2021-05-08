export default class Game { 
    constructor() { 
        this.turn = "X"; 
        this.board = new Array(9); 
        this.board.fill(""); // 3 by 3 board empty 
    }

    next() { 
        if (this.turn === "X") { 
            this.turn = "0"; 
        } else { 
            this.turn = "X"; 
        }
    }

    move(i) { 

        if(!this.isOver() || this.board[i]) { 
            return; 
        }

        this.board[i] = this.turn; 

        if(!this.isWon()) { 
            this.next(); 
        }
        
    }

    isWon () { 
        let winningCombos = [ 
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8], 
            [2, 4, 6], 
        ]; 

        for(let i = 0; i < winningCombos.length; i++) { 
            let [x, y, z] = winningCombos[i]; 
            if (this.board[x] != ""
                && this.board[x] === this.board[y] 
                && this.board[x] === this.board[z]) { 
                return winningCombos[i]; //winning combination 
            }
        }

        return null; 
    }

    isOver() { 
        if (this.isWon() || !this.board.includes("")) { 
            return false; 
        }
        return true;  
    }
}
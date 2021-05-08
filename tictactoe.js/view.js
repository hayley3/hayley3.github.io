export default class View { 
    constructor(div) { 
        this.div = div; 
        this.div.innerHTML = ` 
        <div class = "header"> 
            <div class = "turn"></div> 
            <div class = "status"></div> 
            <button class = "button" id = "restart"> 
                <i class="fas fa-redo"></i>
            </button> 
        </div> 

        <div class = "board"><div> 
        `; 

        for(let i = 0; i < 9; i++) { 
            $(".board").prepend( 
                `<div class = "tile" id = "${i}"></div>`
            )
        }

        let listTiles = div.querySelectorAll(".tile"); 
        for(let i = 0; i < listTiles.length; i++) { 
            listTiles[i].addEventListener("click", () => { 
                this.clickTile(listTiles[i].id); 
            })
        }

       div.querySelector("#restart").addEventListener("click", () => { 
            this.restart();
        }); 
    } 

    updateBoard(game) { 

        $(".turn").replaceWith(`<div class = "turn">${game.turn}'s turn </div>`);  // turn header update 

        let status = "Keep Playing!";  // status header update 
        if (game.isWon()) { 
            if(game.turn === "X") { 
                status = `Player 1 wins!`
            } else { 
                status = `Player 2 wins!`
            }
        } else if (!game.isOver()) { 
            status = `It's a tie!`; 
        } 
        $(".status").replaceWith(`<div class = "status"> ${status} </div>`); 

        let wc = game.isWon(); //check if the game is won; 

        for(let i = 0; i < game.board.length; i++ ) { 
            let currTile = this.div.querySelector(`.tile[id="${i}"]`)

            currTile.setAttribute("class", "tile"); 
            currTile.innerHTML = game.board[i]; 

            if (wc && wc.includes(i)) { 
                currTile.setAttribute("class", "tile tile-winner"); 
            }
        }
    }
}
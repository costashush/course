window.onload = function() {

    var NewGame = new Game("ttt_board", 3, 200);
    NewGame.play();
}




class Game {
    constructor(canvasID, size = 3, cellSize) {
        this.board = [];
        this.cellSize = cellSize;
        this.size = size;

        this.canvas = document.getElementById(canvasID);
        if (!this.canvas.getContext) return;
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.heigth = this.canvas.heigth;




        for (let row = 0; row < this.size; ++row) {
            for (let col = 0; col < this.size; ++col) {
                var cell = new Cell(this.cellSize * row, this.cellSize * col, this.cellSize, this.cellSize);
                cell.draw(this.ctx);
                this.board.push(cell);

                console.log(this.board);

            }
        }


    }

    play() {

        this.canvas.addEventListener('click', (event) => this.onClick(event))

    }
    onClick(event) {
        console.log(event.clientX, event.clientY);
        for (var i = 0; i < this.board.length; ++i) {
            if (event.clientX > this.board[i].x && event.clientY > this.board[i].y && event.clientX < this.board[i].x + this.board[i].w && event.clientY < this.board[i].y + this.board[i].h) {
                console.log(this.board[i]);
                // this.board[i].state=

            }
        }




        // Start listening to clicks
        // draw()
    };
    draw() {

    }


    findClickedCell(canvas) {
        Game.play(canvas);

    }
    checkWin() {}
}

class Cell {
    constructor(x, y, w, h, state, ctx) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.state = "";

    }
    isInCell(x, y) {


        } // returns true/false (does nothing)
    setState(state) {
            // if state ==
            //     this.state = state;


        } // can be ' ', 'x', 'o'
    getState() {
        return this.state;

    }
    draw(ctx) {
        ctx.strokeStyle = '#011';
        ctx.lineWidth = 5;
        ctx.strokeRect(this.x, this.y, this.h, this.w);
        ctx.font = "60px Arial";
        ctx.fillText("-", this.x + this.w / 2, this.y + this.h / 2);

    }
}

// Write a tic-tac-toe game. Game class constructor gets the dom canvas id.
// It manages the board, remembers who`s turn it is and listen to mouse clicks.
// The board keeps a two dimension array of cell objects.
// Each cell draws itself.

// Recommended stages:
// 1. Create the Game with the Cell objects.
// 2. Implement Cell methods: draw(), setState()
// 3. Change the states of cells: 0, 4, 8 to: x,o,x - See if they draw connectly.
// 4. Remove the states from the cells (from stage 3).
// 5. Implement Cell.isInCell(x, y) and Game.onClick(event) and Game.findClickedCell() {} and set the state of clicked cell according to the turn and draw it.
// 6. Check the state of the clicked cell and ignore if clicked taken cell.
// 7. Implement Game.checkWin()
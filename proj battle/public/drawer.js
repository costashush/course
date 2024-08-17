// responsible off display data acording to client game logic

class Draw {

    constructor(socket) {
        this.socket = socket;
        this.canvas = document.getElementById('game_board');
        if (!this.canvas.getContext) return;
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth - 30;
        this.size = Math.floor(this.canvas.width * 0.4);
        this.cellSize = Math.floor(this.size * 0.1);
        this.canvas.height = this.size;
        this.drawBoard(0, 0, this.cellSize);
        this.start = this.canvas.width - this.size
        this.drawBoard(this.start - 100, 0, this.cellSize);
        this.initEventerClicker();


    }

    clearCanvas() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    }
    initEventerClicker() {

        this.canvas.addEventListener('click', (event) => this.onClick(event, this.socket))

    }
    onClick(event, socket) {
        var cord = this.findCordinate(event.offsetX, event.offsetY)
        socket.emit('tryHit', cord);


    }

    findCordinate(x, y) {
        if (x < this.size) {
            return { 'x': parseInt(x / this.cellSize), 'y': parseInt(y / this.cellSize) }

        }

    }

    drawBoard(startX, startY, cell) {


        for (let i = 0; i < 10; ++i) {
            for (let j = 0; j < 10; ++j) {
                this.ctx.strokeStyle = 'rgb(0,0,120)'
                this.ctx.strokeRect(i * cell + startX, j * cell + startY, cell, cell);
            }
        }
    }
    drawship(ship, start, size) {
        for (var cord of ship.target) {
            this.ctx.fillStyle = '#BEBEBE';
            this.ctx.fillRect(cord.x * size + start, cord.y * size, size, size);

        }
    }
    drawHits(x, y, ship) {
        var cord = this.findPixels(x, y)
        if (ship) {
            this.ctx.lineWidth = 2;

            this.ctx.strokeStyle = 'rgb(0,0,120)';
            this.ctx.beginPath();
            this.ctx.strokeRect(cord.x + this.start - 100, cord.y, this.cellSize, this.cellSize);

            this.ctx.moveTo(cord.x + this.start - 100, cord.y);
            this.ctx.lineTo(cord.x + this.cellSize + this.start - 100, cord.y + this.cellSize);
            this.ctx.moveTo(cord.x + this.cellSize + this.start - 100, cord.y);
            this.ctx.lineTo(cord.x + this.start - 100, cord.y + this.cellSize);
            this.ctx.stroke();

        } else {

            this.ctx.fillStyle = 'rgb(0, 200, 235)';
            this.ctx.fillRect(cord.x + this.start - 100, cord.y, this.cellSize, this.cellSize);
            this.ctx.strokeRect(cord.x + this.start - 100, cord.y, this.cellSize, this.cellSize);
        }

    }

    markHits(x, y, ship) {
        var cord = this.findPixels(x, y)
        if (ship) {
            this.ctx.fillStyle = 'rgb(255, 100, 0)';
            this.ctx.fillRect(cord.x, cord.y, this.cellSize, this.cellSize);
            this.ctx.strokeRect(cord.x, cord.y, this.cellSize, this.cellSize);

        } else {

            this.ctx.lineWidth = 2;
            this.ctx.strokeStyle = 'rgb(0,0,120)';
            this.ctx.beginPath();
            this.ctx.strokeRect(cord.x, cord.y, this.cellSize, this.cellSize);
            this.ctx.moveTo(cord.x, cord.y);
            this.ctx.lineTo(cord.x + this.cellSize, cord.y + this.cellSize);
            this.ctx.moveTo(cord.x + this.cellSize, cord.y);
            this.ctx.lineTo(cord.x, cord.y + this.cellSize);
            this.ctx.stroke();
        }
    }


    findPixels(x, y) {

        return { 'x': x * this.cellSize, 'y': y * this.cellSize }
    }

}
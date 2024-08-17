window.onload = function() {
    var canvas = new DrawOnCanvas();
    canvas.draw();
    // canvas.roundRec(400, 400, 100, 50, 20);
    // canvas.roundRec(300, 400, 100, 70, 23);

    canvas.roundRec(100, 400, 35, 35, 0);
    // canvas.roundRec(500, 400, 100, 80, 40);
    canvas.hover();








}

// function draw() {

//     var canvas = document.getElementById('draw-board');
//     if (!canvas.getContext) return;
//     var ctx = canvas.getContext('2d');
//     ctx.fillStyle = 'rgb(200,0,0)';
//     ctx.fillRect(10, 10, 50, 50);

// }


class DrawOnCanvas {

    constructor() {
        this.canvas = document.getElementById('draw-board');
        if (!this.canvas.getContext) return;
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.heigth = this.canvas.heigth;

    }





    draw() {




        // this.ctx.fillStyle = 'rgb(120,0,0)';
        // this.ctx.fillRect(10, 10, 700, 150);

        // this.ctx.strokeStyle = '#011';
        // this.ctx.lineWidth = 5;



        // this.ctx.strokeRect(10, 10, 200, 200);


        // this.ctx.moveTo(100, 100);
        // this.ctx.lineTo(100, 300);
        // this.ctx.arc(105, 305, 5, Math.PI * 1, Math.PI * 0.5, true);
        // this.ctx.lineTo(405, 305);
        // this.ctx.arc(410, 300, 5, Math.PI * 0.5, 0, true);
        // this.ctx.lineTo(410, 100);
        // this.ctx.arc(405, 95, 5, 0, Math.PI * 1.5, true);
        // this.ctx.lineTo(105, 95);
        // this.ctx.arc(105, 100, 5, Math.PI * 1.5, Math.PI * 1, true);


        // // this.ctx.arc(200, 200, 10, 10, 0);

        // this.ctx.stroke();
    }


    roundRec(x, y, width, heigth, radius) {

        this.ctx.beginPath(x, y);
        this.ctx.arc(x, y, radius, Math.PI * 1.5, Math.PI * 1, true);
        this.ctx.arc(x, y + width, radius, Math.PI * 1, Math.PI * 0.5, true);
        this.ctx.arc(x + heigth, y + width, radius, Math.PI * 0.5, Math.PI * 0, true);
        this.ctx.arc(x + heigth, y, radius, Math.PI * 0, Math.PI * 1.5, true);
        this.ctx.closePath();
        this.ctx.stroke();



    }

    hover() {

        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(100, 100, 250, 250);
        this.canvas.addEventListener('mousemove', (event) => {
                if (event.clientX > 100 && event.clientY > 100 && event.clientX < 350 && event.clientX < 350) {
                    this.ctx.fillStyle = 'red';
                    this.ctx.fillRect(100, 100, 250, 250);
                } else {
                    this.ctx.fillStyle = 'green';
                    this.ctx.fillRect(100, 100, 250, 250);
                }

            }

        );


    }
}
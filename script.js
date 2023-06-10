import { Game } from "./src/game.js";

const canvas = document.querySelector('#canvas');

const game =  new Game(canvas, 600, 400);

class Cube {

    constructor() {
        this.counter = 0;
    }

    render(ctx) {
        ctx.fillRect(100 + this.counter, 100 + this.counter, 200, 100);

        if (this.counter < 200) {
            this.counter++;
        }
    }
}

game.renderables.push(new Cube());

game.start();


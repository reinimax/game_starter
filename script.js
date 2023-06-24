import { Game } from "./src/game.js";
import { Medusa } from "./src/Medusa/Medusa.js";

const canvas = document.querySelector('#canvas');

const game = new Game(canvas, 600, 400);
const medusa = new Medusa();
game.updateables.push(medusa);
game.renderables.push(medusa);

game.start(30);

import { Game } from "./src/game.js";
import { Input } from "./src/Input.js";
import { Medusa } from "./src/Medusa/Medusa.js";
import { RunningState } from "./src/states/RunningState.js";
import { PausedState } from "./src/states/PausedState.js";

const canvas = document.querySelector('#canvas');

const input = new Input();
const game = new Game(canvas, 600, 400, input);
const medusa = new Medusa();

const runningState = new RunningState();
runningState.updateables.push(medusa);
runningState.renderables.push(medusa);

const pausedState = new PausedState();
pausedState.renderables.push(medusa);

game.addState('running', runningState);
game.addState('paused', pausedState);
game.transitionStateTo('running');

console.log('Hint: Press ESCAPE key to pause the animation.');

game.start(30);

import { GameLoop } from './GameLoop.js';
import Cybertale from './Cybertale.js';

const cybertale = new Cybertale(document.getElementById('game') as HTMLCanvasElement);

const gameLoop = new GameLoop(cybertale);
window.addEventListener('load', () => {
  gameLoop.start();
});

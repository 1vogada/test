import { Game } from './GameLoop.js';
import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import SceneGameStart from './Scenes/SceneGameStart.js';
export default class Cybertale extends Game {
    canvas;
    keyListener;
    currentScene;
    constructor(canvas) {
        super();
        this.canvas = canvas;
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.keyListener = new KeyListener();
        this.currentScene = new SceneGameStart(this.canvas.width, this.canvas.height);
    }
    processInput() {
        this.currentScene.processInput(this.keyListener);
    }
    update(elapsed) {
        const nextScene = this.currentScene.update(elapsed);
        if (nextScene !== null) {
            this.currentScene = nextScene;
        }
        return true;
    }
    render() {
        CanvasUtil.clearCanvas(this.canvas);
        this.currentScene.render(this.canvas);
    }
}
//# sourceMappingURL=Cybertale.js.map
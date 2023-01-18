import CanvasUtil from '../CanvasUtil.js';
import KeyListener from '../KeyListener.js';
import Scene from './Scene.js';
import SceneStart from './SceneStart.js';
export default class SceneGameStart extends Scene {
    starting;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.starting = false;
        this.background = CanvasUtil.loadNewImage('./assets/pressStart.png');
    }
    processInput(keyListener) {
        if (keyListener.keyPressed(KeyListener.KEY_SPACE)) {
            this.starting = true;
        }
    }
    update() {
        if (this.starting) {
            return new SceneStart(this.maxX, this.maxY);
        }
        return null;
    }
    render(canvas) {
        CanvasUtil.drawImage(canvas, this.background, 0, 0);
    }
}
//# sourceMappingURL=SceneGameStart.js.map
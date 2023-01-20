import CanvasUtil from '../CanvasUtil.js';
import ThxText from '../EndScreenSubClasses/ThxText.js';
import WinText from '../EndScreenSubClasses/WinText.js';
import KeyListener from '../KeyListener.js';
import Scene from './Scene.js';
import SceneStart from './SceneStart.js';
export default class SceneEnd extends Scene {
    starting;
    thxText;
    winText;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.winText = new WinText((maxX / 2) - 322.5, 300, 0.5);
        this.thxText = new ThxText((maxX / 2) - 431.5, 600, 0.5);
        this.starting = false;
        this.background = CanvasUtil.loadNewImage('./assets/endScreen.png');
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
        this.thxText.update();
        this.winText.update();
        return null;
    }
    render(canvas) {
        CanvasUtil.clearCanvas(canvas);
        CanvasUtil.drawImage(canvas, this.background, 0, 0);
        this.thxText.render(canvas);
        this.winText.render(canvas);
    }
}
//# sourceMappingURL=SceneEnd.js.map
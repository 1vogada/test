import CanvasUtil from '../CanvasUtil.js';
import GameObject from './GameObject.js';
export default class Rock extends GameObject {
    constructor(posX, posY) {
        super();
        this.image = CanvasUtil.loadNewImage('./assets/bridge.png');
        this.posX = posX;
        this.posY = posY;
    }
    update() {
        console.log(this.posX);
    }
    setPosX(posX) {
        this.posX = posX;
    }
    setPosY(posY) {
        this.posY = posY;
    }
}
//# sourceMappingURL=Bridge.js.map
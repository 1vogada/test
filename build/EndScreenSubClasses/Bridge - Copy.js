import CanvasUtil from '../CanvasUtil.js';
import GameObject from '../GameObjects/GameObject.js';
export default class Bridge extends GameObject {
    constructor(posX, posY) {
        super(posX, posY);
        this.image = CanvasUtil.loadNewImage('./assets/LevelOne/Objects/bridge.png');
    }
    update(elapsed) {
        if (this.posY < 750)
            this.posY += elapsed * 0.15;
    }
}
//# sourceMappingURL=Bridge%20-%20Copy.js.map
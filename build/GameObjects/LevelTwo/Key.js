import CanvasUtil from '../../CanvasUtil.js';
import GameObject from '../GameObject.js';
export default class Key extends GameObject {
    isBroken;
    constructor(posX, posY) {
        super();
        this.posX = posX;
        this.posY = posY;
        this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/key.png');
        this.isBroken = true;
    }
    update() {
        if (!this.isBroken) {
            this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/broken_key.png');
        }
    }
    repairKey() {
        this.isBroken = false;
    }
}
//# sourceMappingURL=Key.js.map
import CanvasUtil from '../../CanvasUtil.js';
import GameObject from '../GameObject.js';
export default class Key extends GameObject {
    constructor(posX, posY) {
        super();
        this.posX = posX;
        this.posY = posY;
        this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/key.png');
    }
    update(elapsed) {
        console.log(elapsed * this.posX);
    }
}
//# sourceMappingURL=Key.js.map
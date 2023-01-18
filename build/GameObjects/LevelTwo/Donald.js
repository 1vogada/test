import CanvasUtil from '../../CanvasUtil.js';
import GameObject from '../GameObject.js';
export default class Chest extends GameObject {
    constructor(posX, posY) {
        super();
        this.posX = posX;
        this.posY = posY;
        this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/donald.png');
    }
    update() {
        console.log(this.posX);
    }
}
//# sourceMappingURL=Donald.js.map
import CanvasUtil from '../../CanvasUtil.js';
import GameObject from '../GameObject.js';
export default class Donald extends GameObject {
    isThere;
    constructor(posX, posY) {
        super();
        this.isThere = false;
        this.posX = posX;
        this.posY = posY;
        this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/donald.png');
    }
    removeDonald() {
        this.isThere = true;
    }
    setPosX(posX) {
        this.posX = posX;
    }
    setPosY(posY) {
        this.posY = posY;
    }
    update() {
        console.log(this.posX);
    }
}
//# sourceMappingURL=Donald.js.map
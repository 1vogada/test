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
    moveDonald() {
        if (this.posX > 1400) {
            this.posX -= 2;
        }
        else if (this.posY > 200) {
            this.posY -= 2;
        }
        else
            this.posX = -5000;
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
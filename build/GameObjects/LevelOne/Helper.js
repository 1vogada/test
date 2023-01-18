import CanvasUtil from '../../CanvasUtil.js';
import GameObject from '../GameObject.js';
export default class Helper extends GameObject {
    constructor(posX, posY) {
        super();
        this.posX = posX;
        this.posY = posY;
        this.image = CanvasUtil.loadNewImage('./assets/helper.png');
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
    moveSans() {
        if (this.posX > -100) {
            this.posX -= 2;
        }
    }
}
//# sourceMappingURL=Helper.js.map
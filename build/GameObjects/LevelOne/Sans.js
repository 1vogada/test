import CanvasUtil from '../../CanvasUtil.js';
import Helper from '../Helper.js';
export default class Sans extends Helper {
    constructor(posX, posY) {
        super();
        this.posX = posX;
        this.posY = posY;
        this.image = CanvasUtil.loadNewImage('./assets/LevelOne/Objects/sans.png');
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
//# sourceMappingURL=Sans.js.map
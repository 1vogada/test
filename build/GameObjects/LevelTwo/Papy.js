import CanvasUtil from '../../CanvasUtil.js';
import Helper from '../Helper.js';
export default class Papy extends Helper {
    constructor(posX, posY) {
        super();
        this.posX = posX;
        this.posY = posY;
        this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/papy.png');
    }
    update() {
        console.log(this.posX);
    }
    movePapy() {
        if (this.posX > -100) {
            this.posX -= 2;
        }
    }
}
//# sourceMappingURL=Papy.js.map
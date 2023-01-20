import CanvasUtil from '../../CanvasUtil.js';
import GameObject from '../GameObject.js';
export default class Donald extends GameObject {
    isDonaldGone;
    constructor(posX, posY) {
        super(posX, posY);
        this.isDonaldGone = false;
        this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/donald.png');
    }
    setDonaldGone() {
        this.isDonaldGone = true;
    }
    update() {
        if (this.isDonaldGone) {
            if (this.posX > 1400) {
                this.posX -= 2;
            }
            else if (this.posY > 200) {
                this.posY -= 2;
            }
            else
                this.posX = -5000;
        }
    }
}
//# sourceMappingURL=Donald.js.map
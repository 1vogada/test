import CanvasUtil from '../../CanvasUtil.js';
import GameObject from '../GameObject.js';
export default class Crowbar extends GameObject {
    isInUse;
    isSpecial;
    constructor(posX, posY, special) {
        super();
        this.image = CanvasUtil.loadNewImage('./assets/LevelOne/Objects/rock.png');
        this.isInUse = false;
        this.posX = posX;
        this.posY = posY;
        this.isSpecial = special;
    }
    setPosX(posX) {
        this.posX = posX;
    }
    setPosY(posY) {
        this.posY = posY;
    }
    getStatusCarried() {
        return this.isInUse;
    }
    setStatusCarried(status) {
        this.isInUse = status;
    }
    getIsSpecial() {
        return this.isSpecial;
    }
    setIsSpecial(status) {
        this.isSpecial = status;
    }
    update(elapsed) {
        console.log(elapsed * this.posX);
    }
}
//# sourceMappingURL=Crowbar.js.map
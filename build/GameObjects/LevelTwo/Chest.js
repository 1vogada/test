import GameObject from '../GameObject.js';
import CanvasUtil from '../../CanvasUtil.js';
export default class Chest extends GameObject {
    constructor(posX, posY) {
        super();
        this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/chest.png');
        this.posX = posX;
        this.posY = posY;
    }
    isSet;
    setIsSet(status) {
        this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/chestOpen.png');
        this.isSet = status;
    }
    getIsSet() {
        return this.isSet;
    }
    update(elapsed) {
        console.log(elapsed * this.posX);
    }
}
//# sourceMappingURL=Chest.js.map
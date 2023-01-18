import GameObject from '../GameObject.js';
import CanvasUtil from '../../CanvasUtil.js';
export default class Chest extends GameObject {
    isSet;
    constructor(posX, posY) {
        super();
        this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/chest.png');
        this.posX = posX;
        this.posY = posY;
        this.isSet = false;
    }
    unlockChest() {
        this.isSet = true;
    }
    getIsSet() {
        return this.isSet;
    }
    update() {
        if (this.isSet) {
            this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/chestOpen.png');
        }
    }
}
//# sourceMappingURL=Chest.js.map
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
        this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/chestOpen.png');
    }
    getIsSet() {
        return this.isSet;
    }
    update() {
        console.log(this.getHeight());
    }
}
//# sourceMappingURL=Chest.js.map
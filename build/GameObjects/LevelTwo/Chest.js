import GameObject from '../GameObject.js';
import CanvasUtil from '../../CanvasUtil.js';
export default class Chest extends GameObject {
    isUnlocked;
    constructor(posX, posY) {
        super(posX, posY);
        this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/chest.png');
        this.isUnlocked = false;
    }
    unlockChest() {
        this.isUnlocked = true;
    }
    getIsUnlocked() {
        return this.isUnlocked;
    }
    update() {
        if (this.isUnlocked)
            this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/chestOpen.png');
    }
}
//# sourceMappingURL=Chest.js.map
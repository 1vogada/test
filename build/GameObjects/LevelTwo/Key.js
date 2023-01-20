import CanvasUtil from '../../CanvasUtil.js';
import Pickable from '../Pickable.js';
export default class Key extends Pickable {
    isRepaired;
    constructor(posX, posY, special = false) {
        super(posX, posY);
        this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/brokenKey.png');
        this.isInUse = false;
        this.isSpecial = special;
        this.isRepaired = false;
    }
    update() {
        if (this.isRepaired)
            this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/key.png');
    }
    repairKey() {
        this.isRepaired = true;
    }
    getIsRepaired() {
        return this.isRepaired;
    }
}
//# sourceMappingURL=Key.js.map
import CanvasUtil from '../../CanvasUtil.js';
import Pickable from '../Pickable.js';
export default class Crowbar extends Pickable {
    constructor(posX, posY, special = false) {
        super(posX, posY);
        this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/crowbar.png');
        this.isInUse = false;
        this.isSpecial = special;
    }
    update(elapsed) {
        console.log(elapsed * this.posX);
    }
}
//# sourceMappingURL=Crowbar.js.map
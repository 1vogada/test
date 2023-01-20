import CanvasUtil from '../../CanvasUtil.js';
import Pickable from '../Pickable.js';
export default class Rock extends Pickable {
    constructor(posX, posY, special) {
        super(posX, posY);
        this.image = CanvasUtil.loadNewImage('./assets/LevelOne/Objects/rock.png');
        this.isInUse = false;
        this.isSpecial = special;
    }
    update() {
        console.log(this.isInUse);
    }
}
//# sourceMappingURL=Rock.js.map
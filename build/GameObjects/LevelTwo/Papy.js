import CanvasUtil from '../../CanvasUtil.js';
import Helper from '../Helper.js';
export default class Papy extends Helper {
    constructor(posX, posY) {
        super(posX, posY);
        this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/papy.png');
    }
    update() {
        console.log(this.posX);
    }
}
//# sourceMappingURL=Papy.js.map
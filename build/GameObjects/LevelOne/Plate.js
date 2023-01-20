import CanvasUtil from '../../CanvasUtil.js';
import GameObject from '../GameObject.js';
export default class Plate extends GameObject {
    isSet;
    constructor(posX, posY) {
        super(posX, posY);
        this.image = CanvasUtil.loadNewImage('./assets/LevelOne/Objects/pressurePlate.png');
        this.isSet = false;
    }
    update() {
        this.image = CanvasUtil.loadNewImage('./assets/LevelOne/Objects/pressurePlatePressed.png');
        this.isSet = true;
    }
    getIsSet() {
        return this.isSet;
    }
}
//# sourceMappingURL=Plate.js.map
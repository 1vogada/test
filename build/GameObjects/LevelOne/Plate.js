import CanvasUtil from '../../CanvasUtil.js';
import GameObject from '../GameObject.js';
export default class Plate extends GameObject {
    isSet;
    constructor(posX, posY) {
        super();
        this.image = CanvasUtil.loadNewImage('./assets/LevelOne/Objects/pressurePlate.png');
        this.posX = posX;
        this.posY = posY;
    }
    update() {
        console.log(this.posX);
    }
    getIsSet() {
        return this.isSet;
    }
    setIsSet(status) {
        this.image = CanvasUtil.loadNewImage('./assets/LevelOne/Objects/pressurePlatePressed.png');
        this.isSet = status;
    }
}
//# sourceMappingURL=Plate.js.map
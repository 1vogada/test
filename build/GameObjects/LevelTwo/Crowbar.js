import CanvasUtil from '../../CanvasUtil.js';
import GameObject from '../GameObject.js';
export default class Crowbar extends GameObject {
    isInUse;
    isSpecial;
    constructor(posX, posY, special = false) {
        super();
        this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/crowbar.png');
        this.isInUse = false;
        this.posX = posX;
        this.posY = posY;
        this.isSpecial = special;
    }
    setPosX(posX) {
        this.posX = posX;
    }
    setPosY(posY) {
        this.posY = posY;
    }
    getStatusCarried() {
        return this.isInUse;
    }
    setStatusCarried(status) {
        this.isInUse = status;
    }
    getIsSpecial() {
        return this.isSpecial;
    }
    setIsSpecial(status) {
        this.isSpecial = status;
    }
    update(elapsed) {
        console.log(elapsed * this.posX);
    }
    collideWithObject(object) {
        return (this.posX < object.getPosX() + object.getWidth()
            && this.posX + this.image.width > object.getPosX()
            && this.posY < object.getPosY() + object.getHeight()
            && this.image.height + this.posY > object.getPosY());
    }
}
//# sourceMappingURL=Crowbar.js.map
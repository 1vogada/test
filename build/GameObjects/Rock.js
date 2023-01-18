import CanvasUtil from '../CanvasUtil.js';
import GameObject from './GameObject.js';
export default class Rock extends GameObject {
    isInUse;
    isSpecial;
    constructor(posX, posY, special) {
        super();
        this.image = CanvasUtil.loadNewImage('./assets/rock.png');
        this.isInUse = false;
        this.posX = posX;
        this.posY = posY;
        this.isSpecial = special;
    }
    update() {
        console.log(this.isInUse);
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
    collideWithObject(object) {
        return (this.posX < object.getPosX() + object.getWidth()
            && this.posX + this.image.width > object.getPosX()
            && this.posY < object.getPosY() + object.getHeight()
            && this.image.height + this.posY > object.getPosY());
    }
}
//# sourceMappingURL=Rock.js.map
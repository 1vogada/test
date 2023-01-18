import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';
export default class Player extends Drawable {
    maxY;
    maxX;
    speed;
    constructor() {
        super();
        this.posX = 400;
        this.posY = 400;
        this.image = CanvasUtil.loadNewImage('./assets/malPlayer.png');
        this.speed = 3;
    }
    moveUp() {
        this.posY -= this.speed;
    }
    moveDown() {
        this.posY += this.speed;
    }
    moveLeft() {
        this.posX -= this.speed;
    }
    moveRight() {
        this.posX += this.speed;
    }
    collideWithObject(object) {
        return (this.posX < object.getPosX() + object.getWidth()
            && this.posX + this.image.width > object.getPosX()
            && this.posY < object.getPosY() + object.getHeight()
            && this.image.height + this.posY > object.getPosY());
    }
}
//# sourceMappingURL=Player.js.map
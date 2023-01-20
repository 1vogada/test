import Drawable from '../Drawable.js';
export default class BouncyText extends Drawable {
    topY;
    botY;
    reachedTop;
    moveSpeed;
    constructor(posX, posY, topY = posY - 50, botY = posY + 50, speed = 2) {
        super();
        this.reachedTop = true;
        this.posX = posX;
        this.posY = posY;
        this.topY = topY;
        this.botY = botY;
        this.moveSpeed = speed;
    }
    update() {
        if (this.posY >= this.topY && !this.reachedTop) {
            this.posY -= this.moveSpeed;
            this.reachedTop = this.posY === this.topY;
        }
        else if (this.posY < this.botY && this.reachedTop) {
            this.posY += this.moveSpeed;
        }
        else {
            this.reachedTop = false;
        }
    }
}
//# sourceMappingURL=BouncyText.js.map
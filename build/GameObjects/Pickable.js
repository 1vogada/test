import GameObject from './GameObject.js';
export default class Pickable extends GameObject {
    isInUse;
    isSpecial;
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
//# sourceMappingURL=Pickable.js.map
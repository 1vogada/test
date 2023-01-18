import GameObject from '../GameObject';
export default class Chest extends GameObject {
    constructor(posX, posY) {
        super();
        this.posX = posX;
        this.posY = posY;
    }
    update(elapsed) {
        console.log(elapsed * this.posX);
    }
}
//# sourceMappingURL=Chest.js.map
import GameObject from '../GameObject';
export default class Key extends GameObject {
    constructor(posX, posY) {
        super();
        this.posX = posX;
        this.posY = posY;
    }
    update(elapsed) {
        console.log(elapsed * this.posX);
    }
}
//# sourceMappingURL=Key.js.map
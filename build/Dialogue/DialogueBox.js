import Drawable from '../Drawable.js';
export default class DialogueBox extends Drawable {
    count;
    isFinished;
    state;
    constructor(posX, posY) {
        super();
        this.posX = posX;
        this.posY = posY;
        this.count = 1;
        this.state = 1;
        this.isFinished = false;
    }
    getIsFinished() {
        return this.isFinished;
    }
}
//# sourceMappingURL=DialogueBox.js.map
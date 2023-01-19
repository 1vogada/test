import CanvasUtil from '../CanvasUtil.js';
import DialogueBox from './DialogueBox.js';
export default class DialogueLevelOne extends DialogueBox {
    isFinished;
    state;
    constructor(posX, posY) {
        super();
        this.isFinished = false;
        this.posX = posX;
        this.posY = posY;
        this.count = 1;
        this.state = 1;
        this.image = CanvasUtil.loadNewImage(`./assets/LevelOne/Dialogue/d${this.count}.png`);
    }
    upCount(choice) {
        if (!this.isFinished) {
            this.count += 1;
            if (this.state === 1 && this.count !== 0) {
                this.image = CanvasUtil.loadNewImage(`./assets/LevelOne/Dialogue/d${this.count}.png`);
                if (this.count === 10) {
                    this.state = 2;
                    this.count = 0;
                }
            }
            if (this.state === 2 && this.count !== 0) {
                if (this.count < 5) {
                    this.image = CanvasUtil.loadNewImage(`./assets/LevelOne/Dialogue/q${this.count}.png`);
                }
                else if (choice === null) {
                    this.state = 4;
                    this.count = 1;
                }
                else if (choice === 1 || choice === 3) {
                    this.image = CanvasUtil.loadNewImage(`./assets/LevelOne/Dialogue/o${choice}.png`);
                    this.state = 4;
                    this.count = 0;
                }
                else {
                    this.image = CanvasUtil.loadNewImage(`./assets/LevelOne/Dialogue/o${choice}.png`);
                    this.state = 3;
                    this.count = 0;
                }
            }
            if (this.state === 3 && this.count !== 0) {
                this.image = CanvasUtil.loadNewImage(`./assets/LevelOne/Dialogue/c${this.count}.png`);
                if (this.count === 3) {
                    this.count = 0;
                    this.isFinished = true;
                }
            }
            if (this.state === 4 && this.count !== 0) {
                this.image = CanvasUtil.loadNewImage(`./assets/LevelOne/Dialogue/w${this.count}.png`);
                if (this.count === 6) {
                    this.count = 0;
                    this.state = 2;
                }
            }
        }
        else {
            this.image = CanvasUtil.loadNewImage('./assets/blank.png');
        }
    }
    getIsFinished() {
        return this.isFinished;
    }
}
//# sourceMappingURL=DialogueLevelOne.js.map
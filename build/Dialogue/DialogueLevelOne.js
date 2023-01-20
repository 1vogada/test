import CanvasUtil from '../CanvasUtil.js';
import DialogueBox from './DialogueBox.js';
export default class DialogueLevelOne extends DialogueBox {
    constructor(posX, posY) {
        super(posX, posY);
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
}
//# sourceMappingURL=DialogueLevelOne.js.map
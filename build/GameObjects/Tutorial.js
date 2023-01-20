import CanvasUtil from '../CanvasUtil.js';
import GameObject from './GameObject.js';
export default class Tutorial extends GameObject {
    isActive;
    constructor() {
        super(40, 40);
        this.isActive = false;
        this.image = CanvasUtil.loadNewImage('./assets/tutorialPrompt.png');
    }
    update() {
        if (this.isActive) {
            this.image = CanvasUtil.loadNewImage('./assets/tutorial.png');
            this.posX = 670;
            this.posY = 320;
        }
        else {
            this.image = CanvasUtil.loadNewImage('./assets/tutorialPrompt.png');
            this.posX = 40;
            this.posY = 40;
        }
    }
    setActive(status) {
        this.isActive = status;
    }
    getActive() {
        return this.isActive;
    }
}
//# sourceMappingURL=Tutorial.js.map
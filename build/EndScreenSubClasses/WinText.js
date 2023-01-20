import CanvasUtil from '../CanvasUtil.js';
import BouncyText from '../BouncyText.js';
export default class WinText extends BouncyText {
    constructor(posX, posY, speed = 2, topY = posY - 50, botY = posY + 50) {
        super(posX, posY, speed, topY, botY);
        this.image = CanvasUtil.loadNewImage('../assets/EndScreen/WinText.png');
    }
}
//# sourceMappingURL=WinText.js.map
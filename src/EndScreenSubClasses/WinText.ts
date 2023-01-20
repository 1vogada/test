import CanvasUtil from '../CanvasUtil.js';
import BouncyText from '../BouncyText.js';

export default class WinText extends BouncyText {
  public constructor(posX: number, posY: number, speed: number = 2, topY: number = posY - 50, botY: number = posY + 50) {
    super(posX, posY, speed, topY, botY);
    this.image = CanvasUtil.loadNewImage('../assets/EndScreen/WinText.png');
  }
}

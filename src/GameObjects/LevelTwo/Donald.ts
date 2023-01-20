import CanvasUtil from '../../CanvasUtil.js';
import GameObject from '../GameObject.js';

export default class Donald extends GameObject {
  private isDonaldGone: boolean;

  public constructor(posX: number, posY: number) {
    super(posX, posY);
    this.isDonaldGone = false;
    this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/donald.png');
  }

  /**
   *
   */
  public setDonaldGone(): void {
    this.isDonaldGone = true;
  }

  /**
   *update
   */
  public override update(): void {
    if (this.isDonaldGone) {
      if (this.posX > 1400) {
        this.posX -= 2;
      } else if (this.posY > 200) {
        this.posY -= 2;
      } else this.posX = -5000;
    }
  }
}

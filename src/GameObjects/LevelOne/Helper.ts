import CanvasUtil from '../../CanvasUtil.js';
import GameObject from '../GameObject.js';

export default class Helper extends GameObject {
  public constructor(posX: number, posY: number) {
    super();
    this.posX = posX;
    this.posY = posY;
    this.image = CanvasUtil.loadNewImage('./assets/helper.png');
  }

  public setPosX(posX: number): void {
    this.posX = posX;
  }

  public setPosY(posY: number): void {
    this.posY = posY;
  }

  /**
   *update
   */
  public override update(): void {
    console.log(this.posX);
  }

  /**
   * moveSans
   */
  public moveSans(): void {
    if (this.posX > -100) {
      this.posX -= 2;
    }
  }
}

import CanvasUtil from '../../CanvasUtil.js';
import GameObject from '../GameObject.js';

export default class Donald extends GameObject {
  private isThere: boolean;

  public constructor(posX: number, posY: number) {
    super();
    this.isThere = false;
    this.posX = posX;
    this.posY = posY;
    this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/donald.png');
  }

  /**
   *
   */
  public moveDonald(): void {
    if (this.posX > 1400) {
      this.posX -= 2;
    } else if (this.posY > 200) {
      this.posY -= 2;
    } else this.posX = -5000;
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
}

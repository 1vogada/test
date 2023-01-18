import CanvasUtil from '../../CanvasUtil.js';
import Helper from '../Helper.js';

export default class Sans extends Helper {
  public constructor(posX: number, posY: number) {
    super();
    this.posX = posX;
    this.posY = posY;
    this.image = CanvasUtil.loadNewImage('./assets/LevelOne/Objects/sans.png');
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

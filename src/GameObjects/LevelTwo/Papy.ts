import CanvasUtil from '../../CanvasUtil.js';
import Helper from '../Helper.js';

export default class Papy extends Helper {
  public constructor(posX: number, posY: number) {
    super();
    this.posX = posX;
    this.posY = posY;
    this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/papy.png');
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
  public movePapy(): void {
    if (this.posX > -100) {
      this.posX -= 2;
    }
  }
}

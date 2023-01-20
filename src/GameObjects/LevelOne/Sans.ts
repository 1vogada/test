import CanvasUtil from '../../CanvasUtil.js';
import Helper from '../Helper.js';

export default class Sans extends Helper {
  public constructor(posX: number, posY: number) {
    super(posX, posY);
    this.image = CanvasUtil.loadNewImage('./assets/LevelOne/Objects/sans.png');
  }

  /**
   *update
   */
  public override update(): void {
    if (this.posX > -100) {
      this.posX -= 2;
    }
  }
}

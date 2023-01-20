import CanvasUtil from '../../CanvasUtil.js';
import Helper from '../Helper.js';

export default class Papy extends Helper {
  public constructor(posX: number, posY: number) {
    super(posX, posY);
    this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/papy.png');
  }

  /**
   *update
   */
  public override update(): void {
    console.log(this.posX);
  }
}

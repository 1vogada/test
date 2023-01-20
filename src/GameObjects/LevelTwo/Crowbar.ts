import CanvasUtil from '../../CanvasUtil.js';
import Pickable from '../Pickable.js';

export default class Crowbar extends Pickable {
  public constructor(posX: number, posY: number, special: boolean = false) {
    super(posX, posY);
    this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/crowbar.png');
    this.isInUse = false;
    this.isSpecial = special;
  }

  /**
   *
   * @param elapsed asd
   */
  public override update(elapsed: number): void {
    console.log(elapsed * this.posX);
  }
}

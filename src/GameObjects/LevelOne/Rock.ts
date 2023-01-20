import CanvasUtil from '../../CanvasUtil.js';
import Pickable from '../Pickable.js';

export default class Rock extends Pickable {
  public constructor(posX: number, posY: number, special: boolean) {
    super(posX, posY);
    this.image = CanvasUtil.loadNewImage('./assets/LevelOne/Objects/rock.png');
    this.isInUse = false;
    this.isSpecial = special;
  }

  /**
   *update
   */
  public override update(): void {
    console.log(this.isInUse);
  }
}

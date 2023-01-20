import CanvasUtil from '../../CanvasUtil.js';
import Pickable from '../Pickable.js';

export default class Key extends Pickable {
  private isRepaired: boolean;

  public constructor(posX: number, posY: number, special: boolean = false) {
    super(posX, posY);
    this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/brokenKey.png');
    this.isInUse = false;
    this.isSpecial = special;
    this.isRepaired = false;
  }

  /**
   * update
   */
  public override update(): void {
    if (this.isRepaired) this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/key.png');
  }

  /**
   * repairKey
   */
  public repairKey(): void {
    this.isRepaired = true;
  }

  /**
   * @returns getIsRepaired status
   */
  public getIsRepaired(): boolean {
    return this.isRepaired;
  }
}

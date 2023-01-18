import CanvasUtil from '../../CanvasUtil.js';
import GameObject from '../GameObject.js';

export default class Key extends GameObject {
  private isBroken: boolean;

  public constructor(posX: number, posY: number) {
    super();
    this.posX = posX;
    this.posY = posY;
    this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/key.png');
    this.isBroken = true;
  }

  /**
   *
   * update
   */
  public override update(): void {
    if (!this.isBroken) {
      this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/broken_key.png');
    }
  }

  /**
   * repairKey
   */
  public repairKey(): void {
    this.isBroken = false;
  }
}

import CanvasUtil from '../../CanvasUtil.js';
import GameObject from '../GameObject.js';

export default class Bridge extends GameObject {
  public constructor(posX: number, posY: number) {
    super(posX, posY);
    this.image = CanvasUtil.loadNewImage('./assets/LevelOne/Objects/bridge.png');
  }

  /**
   * update
   *
   * @param elapsed ms
   */
  public override update(elapsed: number): void {
    if (this.posY < 750) this.posY += elapsed * 0.15;
  }
}

import CanvasUtil from '../CanvasUtil.js';
import GameObject from './GameObject.js';

export default class Helper extends GameObject {
  public constructor(posX: number, posY: number) {
    super();
    this.posX = posX;
    this.posY = posY;
    this.image = CanvasUtil.loadNewImage('./assets/helper.png');
  }

  /**
   *update
   */
  public override update(): void {
    console.log(this.posX);
  }
}

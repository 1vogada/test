import CanvasUtil from '../../CanvasUtil.js';
import GameObject from '../GameObject.js';

export default class Rock extends GameObject {
  public constructor(posX: number, posY: number) {
    super();
    this.image = CanvasUtil.loadNewImage('./assets/bridge.png');
    this.posX = posX;
    this.posY = posY;
  }

  /**
   *update
   */
  public override update(): void {
    console.log(this.posX);
  }

  public setPosX(posX: number): void {
    this.posX = posX;
  }

  public setPosY(posY: number): void {
    this.posY = posY;
  }
}

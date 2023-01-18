import CanvasUtil from '../../CanvasUtil.js';
import GameObject from '../GameObject.js';

export default class Chest extends GameObject {
  public constructor(posX: number, posY: number) {
    super();
    this.posX = posX;
    this.posY = posY;
    this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/donald.png');
  }

  /**
   *update
   */
  public override update(): void {
    console.log(this.posX);
  }
}

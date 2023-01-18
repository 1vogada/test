import GameObject from '../GameObject.js';
import CanvasUtil from '../../CanvasUtil.js';

export default class Chest extends GameObject {
  public constructor(posX: number, posY: number) {
    super();
    this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/chest.png');
    this.posX = posX;
    this.posY = posY;
  }

  private isSet: boolean;

  public setIsSet(status: boolean): void {
    this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/chestOpen.png');
    this.isSet = status;
  }

  public getIsSet(): boolean {
    return this.isSet;
  }

  /**
   *
   * @param elapsed asd
   */
  public override update(elapsed: number): void {
    console.log(elapsed * this.posX);
  }
}

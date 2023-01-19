import GameObject from '../GameObject.js';
import CanvasUtil from '../../CanvasUtil.js';

export default class Chest extends GameObject {
  private isSet: boolean;

  public constructor(posX: number, posY: number) {
    super();
    this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/chest.png');
    this.posX = posX;
    this.posY = posY;
    this.isSet = false;
  }

  /**
   *  unlock chest
   */
  public unlockChest(): void {
    this.isSet = true;
    this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/chestOpen.png');
  }

  public getIsSet(): boolean {
    return this.isSet;
  }

  /**
   *update
   */
  public override update(): void {
    console.log(this.getHeight());
  }
}

import GameObject from '../GameObject.js';
import CanvasUtil from '../../CanvasUtil.js';

export default class Chest extends GameObject {
  private isUnlocked: boolean;

  public constructor(posX: number, posY: number) {
    super(posX, posY);
    this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/chest.png');
    this.isUnlocked = false;
  }

  /**
   *  unlock chest
   */
  public unlockChest(): void {
    this.isUnlocked = true;
  }

  public getIsUnlocked(): boolean {
    return this.isUnlocked;
  }

  /**
   *update
   */
  public override update(): void {
    if (this.isUnlocked) this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/chestOpen.png');
  }
}

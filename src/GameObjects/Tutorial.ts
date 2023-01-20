import CanvasUtil from '../CanvasUtil.js';
import GameObject from './GameObject.js';

export default class Tutorial extends GameObject {
  private isActive: boolean;

  public constructor() {
    super(40, 40);
    this.isActive = false;
    this.image = CanvasUtil.loadNewImage('./assets/tutorialPrompt.png');
  }

  /**
   *
   */
  public override update(): void {
    if (this.isActive) {
      this.image = CanvasUtil.loadNewImage('./assets/tutorial.png');
      this.posX = 670;
      this.posY = 320;
    } else {
      this.image = CanvasUtil.loadNewImage('./assets/tutorialPrompt.png');
      this.posX = 40;
      this.posY = 40;
    }
  }

  /**
   * setActive
   *
   * @param status open or closed, true or false
   */
  public setActive(status: boolean): void {
    this.isActive = status;
  }

  /**
   * getActive
   *
   * @returns whether the tutorial image is open or not, true for open, false for closed
   */
  public getActive(): boolean {
    return this.isActive;
  }
}

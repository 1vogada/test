import Drawable from './Drawable.js';

export default abstract class BouncyText extends Drawable {
  protected topY: number;

  protected botY: number;

  protected reachedTop: boolean;

  protected moveSpeed: number;

  public constructor(posX: number, posY: number, speed: number = 2, topY: number = posY - 50, botY: number = posY + 50) {
    super();
    this.reachedTop = true;
    this.posX = posX;
    this.posY = posY;
    this.topY = topY;
    this.botY = botY;
    this.moveSpeed = speed;
  }

  /**
   * update
   *
   * @param elapsed ms
   */
  public update(): void {
    if (this.posY >= this.topY && !this.reachedTop) {
      this.posY -= this.moveSpeed;
      this.reachedTop = this.posY === this.topY;
    } else if (this.posY <= this.botY && this.reachedTop) {
      this.posY += this.moveSpeed;
    } else {
      this.reachedTop = false;
    }
  }
}

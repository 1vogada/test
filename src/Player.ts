import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';
import GameObject from './GameObjects/GameObject.js';

export default class Player extends Drawable {
  private maxY: number;

  public constructor(maxX: number, maxY: number) {
    super();
    this.posX = maxX - 100;
    this.posY = maxY / 2;
    this.image = CanvasUtil.loadNewImage('./assets/malPlayer.png');
    this.maxY = maxY;
  }

  /**
   * moveUp
   */
  public moveUp(): void {
    if (this.posY <= 0) {
      this.posY = 0;
    } else {
      this.posY -= 6;
    }
  }

  /**
   * moveDown
   */
  public moveDown(): void {
    if (this.posY >= this.maxY) {
      this.posY = this.maxY;
    } else {
      this.posY += 6;
    }
  }

  /**
   * collideWithObject
   *
   * @param object ->
   * @returns true if collision happened
   */
  public collideWithObject(object: GameObject): boolean {
    return (this.posX < object.getPosX() + object.getWidth()
      && this.posX + this.image.width > object.getPosX()
      && this.posY < object.getPosY() + object.getHeight()
      && this.image.height + this.posY > object.getPosY());
  }
}

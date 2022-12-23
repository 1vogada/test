import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';
import GameObject from './GameObjects/GameObject.js';

export default class Player extends Drawable {
  private maxY: number;

  private maxX: number;

  public constructor(maxX: number, maxY: number) {
    super();
    this.posX = maxX / 2;
    this.posY = maxY / 2;
    this.image = CanvasUtil.loadNewImage('./assets/mal150.png');
    this.maxY = maxY;
    this.maxX = maxX;
  }

  /**
   * moveUp
   */
  public moveUp(): void {
    if (this.posY > 200) {
      this.posY -= 6;
    }
  }

  /**
   * moveDown
   */
  public moveDown(): void {
    if (this.posY < 720) {
      this.posY += 6;
    }
  }

  /**
   * moveLeft
   */
  public moveLeft(): void {
    if (this.posX > 0) {
      this.posX -= 6;
    }
  }

  /**
   * moveRight
   */
  public moveRight(): void {
    if (this.posX < this.maxX / 2) {
      this.posX += 6;
    }
  }

  /**
   * collideWithObject
   *
   * @param object ->
   * @returns true if collision happened
   */
  public collideWithObject(object: GameObject): boolean {
    return (this.posX + 30 < object.getPosX() + object.getWidth()
      && this.posX + this.image.width > object.getPosX()
      && this.posY + 180 < object.getPosY() + object.getHeight()
      && this.image.height + this.posY > object.getPosY() + 180);
  }
}

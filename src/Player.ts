import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';
import GameObject from './GameObjects/GameObject.js';

export default class Player extends Drawable {
  private maxY: number;

  private maxX: number;

  private speed: number;

  public constructor() {
    super();
    this.posX = 400;
    this.posY = 400;
    this.image = CanvasUtil.loadNewImage('./assets/malPlayer.png');
    this.speed = 3;
  }

  /**
   * moveUp
   */
  public moveUp(): void {
    this.posY -= this.speed;
  }

  /**
   * moveDown
   */
  public moveDown(): void {
    this.posY += this.speed;
  }

  /**
   * moveLeft
   */
  public moveLeft(): void {
    this.posX -= this.speed;
  }

  /**
   * moveRight
   */
  public moveRight(): void {
    this.posX += this.speed;
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

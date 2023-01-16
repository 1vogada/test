import CanvasUtil from '../../CanvasUtil.js';
import GameObject from '../GameObject.js';

export default class Rock extends GameObject {
  private isInUse: boolean;

  private isSpecial: boolean;

  public constructor(posX: number, posY: number, special: boolean) {
    super();
    this.image = CanvasUtil.loadNewImage('./assets/rock.png');
    this.isInUse = false;
    this.posX = posX;
    this.posY = posY;
    this.isSpecial = special;
  }

  /**
   *update
   */
  public override update(): void {
    console.log(this.isInUse);
  }

  public setPosX(posX: number): void {
    this.posX = posX;
  }

  public setPosY(posY: number): void {
    this.posY = posY;
  }

  public getStatusCarried():boolean {
    return this.isInUse;
  }

  public setStatusCarried(status: boolean): void {
    this.isInUse = status;
  }

  public getIsSpecial(): boolean {
    return this.isSpecial;
  }

  public setIsSpecial(status: boolean): void {
    this.isSpecial = status;
  }

  /**
   * Checks to see if rock collides with another object
   *
   * @returns returns true if collision
   * @param object object to collide with
   */
  public collideWithObject(object: GameObject): boolean {
    return (this.posX < object.getPosX() + object.getWidth()
      && this.posX + this.image.width > object.getPosX()
      && this.posY < object.getPosY() + object.getHeight()
      && this.image.height + this.posY > object.getPosY());
  }
}

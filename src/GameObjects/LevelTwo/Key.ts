import CanvasUtil from '../../CanvasUtil.js';
import GameObject from '../GameObject.js';

export default class Crowbar extends GameObject {
  private isInUse: boolean;

  private isBroken: boolean;

  private isSpecial: boolean;

  public constructor(posX: number, posY: number, special: boolean = false) {
    super();
    this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/brokenKey.png');
    this.isInUse = false;
    this.posX = posX;
    this.posY = posY;
    this.isSpecial = special;
    this.isBroken = true;
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
   *
   * @param elapsed asd
   */
  public override update(elapsed: number): void {
    console.log(elapsed * this.posX);
  }

  /**
   *
   * @param object is good
   * @returns if it collides
   */
  public collideWithObject(object: GameObject): boolean {
    return (this.posX < object.getPosX() + object.getWidth()
      && this.posX + this.image.width > object.getPosX()
      && this.posY < object.getPosY() + object.getHeight()
      && this.image.height + this.posY > object.getPosY());
  }

  /**
   * repairKey
   */
  public repairKey(): void {
    this.image = CanvasUtil.loadNewImage('./assets/LevelTwo/Objects/brokenKey.png');
    this.isBroken = false;
  }

  /**
   * @returns getBroken status
   */
  public getBroken(): boolean {
    return this.isBroken;
  }
}

import GameObject from './GameObject.js';

export default abstract class Pickable extends GameObject {
  protected isInUse: boolean;

  protected isSpecial: boolean;

  public setPosX(posX: number): void {
    this.posX = posX;
  }

  public setPosY(posY: number): void {
    this.posY = posY;
  }

  public getStatusCarried(): boolean {
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
   * @param object is good
   * @returns if it collides
   */
  public collideWithObject(object: GameObject): boolean {
    return (this.posX < object.getPosX() + object.getWidth()
      && this.posX + this.image.width > object.getPosX()
      && this.posY < object.getPosY() + object.getHeight()
      && this.image.height + this.posY > object.getPosY());
  }
}

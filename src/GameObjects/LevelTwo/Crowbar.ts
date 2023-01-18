import GameObject from '../GameObject';

export default class Crowbar extends GameObject {
  public constructor(posX: number, posY: number) {
    super();
    this.posX = posX;
    this.posY = posY;
  }

  /**
   *
   * @param elapsed asd
   */
  public override update(elapsed: number): void {
    console.log(elapsed * this.posX);
  }
}

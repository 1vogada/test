import Drawable from '../Drawable.js';

export default abstract class GameObject extends Drawable {
  public constructor(posX: number, posY: number) {
    super();
    this.posX = posX;
    this.posY = posY;
  }
  public abstract update(elapsed: number): void;
}

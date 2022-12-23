import Drawable from '../Drawable.js';

export default abstract class GameObject extends Drawable {
  public abstract update(elapsed: number): void;
  public abstract setPosX(posX: number): void;
  public abstract setPosY(posY: number): void;
}

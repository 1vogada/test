import Drawable from '../Drawable.js';

export default abstract class GameObject extends Drawable {
  public abstract update(elapsed: number): void;
}

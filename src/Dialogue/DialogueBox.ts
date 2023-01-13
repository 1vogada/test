import Drawable from '../Drawable.js';

export default abstract class DialogueBox extends Drawable {
  // a variable for moving through the dialoge
  protected count: number;

  public abstract upCount(choice: string): void;
}

import Drawable from '../Drawable.js';

export default abstract class DialogueBox extends Drawable {
  // a variable for moving through the dialoge
  protected count: number;

  // if the dialogue is finished
  protected isFinished: boolean;

  // 1 - starting dialogue, can't go once finished
  // 2 - repeating dialogue, repeated after end of wrong choice dialogue
  // 3 - ending dialogue, accessible after correct choice
  // 4 - wrong dialogue, accessible after wrong choice
  protected state: number;

  public constructor(posX: number, posY: number) {
    super();
    this.posX = posX;
    this.posY = posY;
    this.count = 1;
    this.state = 1;
    this.isFinished = false;
  }

  public abstract upCount(choice: number): void;

  /**
   * getIsFinished
   *
   * @returns true if the dialogue is done
   */
  public getIsFinished(): boolean {
    return this.isFinished;
  }
}

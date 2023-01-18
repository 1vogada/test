import CanvasUtil from '../CanvasUtil.js';
import DialogueBox from './DialogueBox.js';

export default class DialogueLevelOne extends DialogueBox {
  // if the dialogue is finished
  private isFinished: boolean;

  // 1 - starting dialogue, can't go once finished
  // 2 - repeating dialogue, repeated after end of wrong choice dialogue
  // 3 - ending dialogue, accessible after correct choice
  // 4 - wrong dialogue, accessible after wrong choice
  private state: number;

  public constructor(posX: number, posY: number) {
    super();
    this.isFinished = false;
    this.posX = posX;
    this.posY = posY;
    this.count = 1;
    this.state = 1;
    this.image = CanvasUtil.loadNewImage(`./assets/LevelOne/Dialogue/d${this.count}.png`);
  }

  /**
   *  moves through the dialogue
   *
   * @param choice gets the choice by user input
   */
  public override upCount(choice: number): void {
    if (!this.isFinished) {
      this.count += 1;
      if (this.state === 1 && this.count !== 0) {
        this.image = CanvasUtil.loadNewImage(`./assets/LevelOne/Dialogue/d${this.count}.png`);
        if (this.count === 10) {
          this.state = 2;
          this.count = 0;
        }
      }
      if (this.state === 2 && this.count !== 0) {
        if (this.count < 5) {
          this.image = CanvasUtil.loadNewImage(`./assets/LevelOne/Dialogue/q${this.count}.png`);
        } else if (choice === null) {
          this.state = 4;
          this.count = 1;
        } else if (choice === 1 || choice === 3) {
          this.image = CanvasUtil.loadNewImage(`./assets/LevelOne/Dialogue/o${choice}.png`);
          this.state = 4;
          this.count = 0;
        } else {
          this.image = CanvasUtil.loadNewImage(`./assets/LevelOne/Dialogue/o${choice}.png`);
          this.state = 3;
          this.count = 0;
        }
      }
      if (this.state === 3 && this.count !== 0) {
        this.image = CanvasUtil.loadNewImage(`./assets/LevelOne/Dialogue/c${this.count}.png`);
        if (this.count === 3) {
          this.count = 0;
          this.isFinished = true;
        }
      }
      if (this.state === 4 && this.count !== 0) {
        this.image = CanvasUtil.loadNewImage(`./assets/LevelOne/Dialogue/w${this.count}.png`);
        if (this.count === 6) {
          this.count = 0;
          this.state = 2;
        }
      }
    } else {
      this.image = CanvasUtil.loadNewImage('./assets/blank.png');
    }
  }

  /**
   * getIsFinished
   *
   * @returns true if the dialogue is done
   */
  public getIsFinished(): boolean {
    return this.isFinished;
  }
}

import CanvasUtil from '../CanvasUtil.js';
import DialogueBox from './DialogueBox.js';

export default class DialogueLevelOne extends DialogueBox {
  private playerDialogue: boolean;

  private beforeAnswer: boolean;

  private state: number;

  public constructor(posX: number, posY: number) {
    super();
    this.posX = posX;
    this.posY = posY;
    this.count = 1;
    this.state = 1;
    this.beforeAnswer = true;
    this.playerDialogue = true;
    this.image = CanvasUtil.loadNewImage('../assets/LevelOne/d1.png');
  }

  /**
   *  moves through the dialogue
   *
   * @param choice gets the choice by user input
   */
  public override upCount(choice: string): void {
    console.log(this.state);
    console.log(this.count);
    if (this.state === 1) {
      this.count += 1;
      if (this.playerDialogue) {
        this.image = CanvasUtil.loadNewImage('../assets/LevelOne/d0.png');
        this.count -= 1;
        this.playerDialogue = false;
      } else {
        if (this.count === 2 || this.count === 5) {
          this.playerDialogue = true;
        }
        this.image = CanvasUtil.loadNewImage(`../assets/LevelOne/d${this.count}.png`);
      }
      if (this.count === 7) {
        this.state = 2;
        this.count = 1;
      }
    } else if (this.state === 2) {
      if (this.beforeAnswer) {
        this.image = CanvasUtil.loadNewImage(`../assets/LevelOne/q${this.count}.png`);
      } else if ((choice === 'A' || choice === 'C') && !this.beforeAnswer) {
        this.image = CanvasUtil.loadNewImage(`../assets/LevelOne/choice${choice}.png`);
        this.count = 0;
      } else if (choice === 'B' && !this.beforeAnswer) {
        this.image = CanvasUtil.loadNewImage('../assets/LevelOne/choiceB.png');
        this.count = 0;
        this.state = 3;
      } else {
        this.image = CanvasUtil.loadNewImage(`../assets/LevelOne/w${this.count}.png`);
      }
      if (this.count === 3) this.beforeAnswer = false;
      this.count += 1;
      if (this.count > 6) {
        this.count = 1;
        this.beforeAnswer = true;
      }
    } else {
      if (this.count < 3) {
        this.image = CanvasUtil.loadNewImage(`../assets/LevelOne/c${this.count}.png`);
      }
      this.count += 1;
    }
  }
}

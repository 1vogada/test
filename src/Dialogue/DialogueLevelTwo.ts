import CanvasUtil from '../CanvasUtil.js';
import DialogueBox from './DialogueBox.js';

export default class DialogueLevelTwo extends DialogueBox {
  // if the dialogue is finished
  private isFinished: boolean;

  // 1 - starting dialogue, can't go once finished
  // 2 - repeating dialogue, repeated after end of wrong choice dialogue
  // 3 - ending dialogue, accessible after correct choice
  // 4 - wrong dialogue, accessible after wrong choice
  private state: number;

  // whether to load the dialogue for the crowbar or the key
  private purpose: string;

  public constructor(posX: number, posY: number, purpose: string) {
    super();
    this.isFinished = false;
    this.posX = posX;
    this.posY = posY;
    this.count = 1;
    this.state = 1;
    this.purpose = purpose;
    this.image = CanvasUtil.loadNewImage(`./assets/LevelTwo/Dialogue/${this.purpose}Dialogue/d${this.count}.png`);
  }

  /**
   *  moves through the dialogue
   *
   * @param choice input for the choice questions
   */
  public override upCount(choice: number): void {
    if (!this.isFinished) {
      this.count += 1;
      if (this.state === 1 && this.count !== 0) {
        this.image = CanvasUtil.loadNewImage(`./assets/LevelTwo/Dialogue/${this.purpose}Dialogue/d${this.count}.png`);
        if ((this.count === 8 && this.purpose === 'Crowbar')
          || (this.count === 7 && this.purpose === 'Key')) {
          this.state = 2;
          this.count = 0;
        }
      }
      if (this.state === 2 && this.count !== 0) {
        if (this.count < 5) {
          this.image = CanvasUtil.loadNewImage(`./assets/LevelTwo/Dialogue/${this.purpose}Dialogue/q${this.count}.png`);
        } else if (choice === null) {
          this.state = 4;
          this.count = 1;
        } else if ((choice === 1 && this.purpose === 'Crowbar')
        || (choice === 2 && this.purpose === 'Key')) {
          this.image = CanvasUtil.loadNewImage(`./assets/LevelTwo/Dialogue/${this.purpose}Dialogue/o${choice}.png`);
          this.state = 3;
          this.count = 0;
        } else {
          this.image = CanvasUtil.loadNewImage(`./assets/LevelTwo/Dialogue/${this.purpose}Dialogue/o${choice}.png`);
          this.state = 4;
          this.count = 0;
        }
      }
      if (this.state === 3 && this.count !== 0) {
        this.image = CanvasUtil.loadNewImage(`./assets/LevelTwo/Dialogue/${this.purpose}Dialogue/c${this.count}.png`);
        if ((this.count === 6 && this.purpose === 'Crowbar')
          || (this.count === 8 && this.purpose === 'Key')) {
          this.count = 0;
          this.isFinished = true;
        }
      }
      if (this.state === 4 && this.count !== 0) {
        this.image = CanvasUtil.loadNewImage(`./assets/LevelTwo/Dialogue/${this.purpose}Dialogue/w${this.count}.png`);
        if ((this.count === 4 && this.purpose === 'Crowbar')
          || (this.count === 6 && this.purpose === 'Key')) {
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

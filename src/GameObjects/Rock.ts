import CanvasUtil from '../CanvasUtil.js';
import GameObject from './GameObject.js';

export default class Rock extends GameObject {
  private isInUse: boolean;

  public constructor(maxX: number, maxY: number) {
    super();
    this.posX = Math.floor(Math.random() * 850) - 80;
    this.posY = Math.floor(Math.random() * 550) + 80;
    this.image = CanvasUtil.loadNewImage('./assets/rock300.png');
    this.isInUse = false;
    console.log(maxX);
    console.log(maxY);
  }

  /**
   *update
   */
  public override update(): void {
    console.log(this.isInUse);
  }

  /**
   *  used when player clicks E when over rock
   */
  public interacted(): void {
    if (this.isInUse) {
      this.isInUse = false;
    } else {
      this.isInUse = true;
    }
  }

  /**
   * moveUp
   */
  public moveUp(): void {
    if (this.posY > 80 && this.isInUse) {
      this.posY -= 6;
    }
  }

  /**
   * moveDown
   */
  public moveDown(): void {
    if (this.posY < 620 && this.isInUse) {
      this.posY += 6;
    }
  }

  /**
   * moveLeft
   */
  public moveLeft(): void {
    if (this.posX > -80 && this.isInUse) {
      this.posX -= 6;
    }
  }

  /**
   * moveRight
   */
  public moveRight(): void {
    if (this.posX < 850 && this.isInUse) {
      this.posX += 6;
    }
  }
}

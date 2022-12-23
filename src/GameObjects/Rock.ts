import CanvasUtil from '../CanvasUtil.js';
import GameObject from './GameObject.js';

export default class Rock extends GameObject {
  private isInUse: boolean;

  private playerPosX: number;

  private playerPosY: number;

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
   *
   * @param elapsed 16ms rougly
   */
  public override update(elapsed: number): void {
    if (this.isInUse) {
      this.posX = this.playerPosX;
      this.posY = this.playerPosY - 100;
      console.log(elapsed);
    }
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

  public override setPosX(posX: number): void {
    this.playerPosX = posX;
  }

  public override setPosY(posY: number): void {
    this.playerPosY = posY;
  }
}

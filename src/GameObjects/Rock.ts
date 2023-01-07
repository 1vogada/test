import CanvasUtil from '../CanvasUtil.js';
import GameObject from './GameObject.js';

export default class Rock extends GameObject {
  private isInUse: boolean;

  public constructor(posX: number, posY: number) {
    super();
    this.image = CanvasUtil.loadNewImage('./assets/rock.png');
    this.isInUse = false;
    this.posX = posX;
    this.posY = posY;
  }

  /**
   *update
   */
  public override update(): void {
    console.log(this.isInUse);
  }

  public setPosX(posX: number): void {
    this.posX = posX;
  }

  public setPosY(posY: number): void {
    this.posY = posY;
  }

  public getStatusCarried():boolean {
    return this.isInUse;
  }

  public setStatusCarried(status: boolean): void {
    this.isInUse = status;
  }
}

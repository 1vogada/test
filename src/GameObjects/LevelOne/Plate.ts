import CanvasUtil from '../../CanvasUtil.js';
import GameObject from '../GameObject.js';

export default class Plate extends GameObject {
  private isSet: boolean;

  public constructor(posX: number, posY: number) {
    super();
    this.image = CanvasUtil.loadNewImage('./assets/LevelOne/Objects/pressurePlate.png');
    this.posX = posX;
    this.posY = posY;
  }

  /**
   *update
   */
  public override update(): void {
    console.log(this.posX);
  }

  public getIsSet(): boolean {
    return this.isSet;
  }

  public setIsSet(status: boolean): void {
    this.image = CanvasUtil.loadNewImage('./assets/LevelOne/Objects/pressurePlatePressed.png');
    this.isSet = status;
  }
}

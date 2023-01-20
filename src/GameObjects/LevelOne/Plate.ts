import CanvasUtil from '../../CanvasUtil.js';
import GameObject from '../GameObject.js';

export default class Plate extends GameObject {
  private isSet: boolean;

  public constructor(posX: number, posY: number) {
    super(posX, posY);
    this.image = CanvasUtil.loadNewImage('./assets/LevelOne/Objects/pressurePlate.png');
    this.isSet = false;
  }

  /**
   *update
   */
  public override update(): void {
    this.image = CanvasUtil.loadNewImage('./assets/LevelOne/Objects/pressurePlatePressed.png');
    this.isSet = true;
  }

  public getIsSet(): boolean {
    return this.isSet;
  }
}

import CanvasUtil from './CanvasUtil.js';

export default abstract class Drawable {
  protected image: HTMLImageElement;

  protected posX: number;

  protected posY: number;

  /**
   * getPosX
   *
   * @returns item X axis position
   */
  public getPosX(): number {
    return this.posX;
  }

  /**
   * getPosY
   *
   * @returns item Y axis position
   */
  public getPosY(): number {
    return this.posY;
  }

  /**
   * getWidth
   *
   * @returns image width
   */
  public getWidth(): number {
    return this.image.width;
  }

  /**
   * getHeight
   *
   * @returns image height
   */
  public getHeight(): number {
    return this.image.height;
  }

  /**
   * render
   *
   * @param canvas draws the item on the canvas
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.drawImage(canvas, this.image, this.posX, this.posY);
  }
}

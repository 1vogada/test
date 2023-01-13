import CanvasUtil from '../CanvasUtil.js';
import KeyListener from '../KeyListener.js';
import Scene from './Scene.js';
import SceneStart from './SceneStart.js';

export default class SceneGameStart extends Scene {
  private starting: boolean;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.starting = false;
    this.background = CanvasUtil.loadNewImage('./assets/pressStart.png');
  }

  /**
   * if Space is pressed then start the game
   *
   * @param keyListener see if player pressed Space
   */
  public override processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed(KeyListener.KEY_SPACE)) {
      this.starting = true;
    }
  }

  /**
   * @returns next Scene
   */
  public override update(): Scene {
    if (this.starting) {
      return new SceneStart(this.maxX, this.maxY);
    }

    return null;
  }

  /**
   *
   * @param canvas background jpg
   */
  public override render(canvas: HTMLCanvasElement): void {
    CanvasUtil.drawImage(
      canvas,
      this.background,
      0,
      0,
    );
  }
}

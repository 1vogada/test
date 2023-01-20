import CanvasUtil from '../CanvasUtil.js';
import ThxText from '../EndScreenSubClasses/ThxText.js';
import WinText from '../EndScreenSubClasses/WinText.js';
import KeyListener from '../KeyListener.js';
import Scene from './Scene.js';
import SceneStart from './SceneStart.js';

export default class SceneEnd extends Scene {
  private starting: boolean;

  private thxText: ThxText;

  private winText: WinText;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.winText = new WinText((maxX / 2) - 322.5, 300, 0.5);
    this.thxText = new ThxText((maxX / 2) - 431.5, 600, 0.5);
    this.starting = false;
    this.background = CanvasUtil.loadNewImage('./assets/endScreen.png');
  }

  /**
   * if Space is pressed then start the game
   *
   * @param keyListener see if player pressed Space
   */
  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed(KeyListener.KEY_SPACE)) {
      this.starting = true;
    }
  }

  /**
   * @returns next Scene
   */
  public update(): Scene {
    if (this.starting) {
      return new SceneStart(this.maxX, this.maxY);
    }
    this.thxText.update();
    this.winText.update();
    return null;
  }

  /**
   *
   * @param canvas background jpg
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.drawImage(
      canvas,
      this.background,
      0,
      0,
    );
    this.thxText.render(canvas);
    this.winText.render(canvas);
  }
}

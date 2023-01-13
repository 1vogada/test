import { Game } from './GameLoop.js';
import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Scene from './Scenes/Scene.js';
import SceneGameStart from './Scenes/SceneGameStart.js';

export default class Cybertale extends Game {
  private canvas: HTMLCanvasElement;

  private keyListener: KeyListener;

  private currentScene: Scene;

  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.keyListener = new KeyListener();

    this.currentScene = new SceneGameStart(this.canvas.width, this.canvas.height);
  }

  /**
   *  First if check -> If ArrowKey Down is pressed, make the net go down
   *  Second if check -> If ArrowKey Up is pressed, make the net go up
   */
  public processInput(): void {
    this.currentScene.processInput(this.keyListener);
  }

  /**
   *
   * @param elapsed time passed
   * @returns true and changes the frame
   */
  public update(elapsed: number): boolean {
    const nextScene = this.currentScene.update(elapsed);
    if (nextScene !== null) { this.currentScene = nextScene; }
    return true;
  }

  /**
   *
   */
  public render(): void {
    CanvasUtil.clearCanvas(this.canvas);
    this.currentScene.render(this.canvas);
  }
}

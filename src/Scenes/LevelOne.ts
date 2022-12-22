/* eslint-disable max-len */
/* eslint-disable jsdoc/require-jsdoc */
import KeyListener from '../KeyListener.js';
import Scene from './Scene.js';
import Player from '../Player.js';
import CanvasUtil from '../CanvasUtil.js';
import GameObject from '../GameObjects/GameObject.js';

export default class LevelOne extends Scene {
  private player: Player;

  private gameObject: GameObject[] = [];

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.background = CanvasUtil.loadNewImage('./assets/backgroundLevelOne.png');
    this.player = new Player(maxX, maxY);
  }

  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed(KeyListener.KEY_ESC)) {
      this.player.getPosX();
      window.location.reload();
    }
  }

  public update(elapsed: number): Scene {
    this.gameObject.forEach((object: GameObject) => object.update(elapsed));

    this.gameObject = this.gameObject.filter((object: GameObject) => object.getPosX() < this.maxX
    && object.getPosX() > 0 - object.getWidth()
    && object.getPosY() < this.maxY
    && object.getPosY() > 0 - object.getHeight());
    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.drawImage(
      canvas,
      this.background,
      0,
      0,
    );
    this.gameObject.forEach((object: GameObject) => object.render(canvas));
    this.player.render(canvas);
  }
}

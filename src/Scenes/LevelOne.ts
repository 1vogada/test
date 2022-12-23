/* eslint-disable max-len */
/* eslint-disable jsdoc/require-jsdoc */
import KeyListener from '../KeyListener.js';
import Scene from './Scene.js';
import Player from '../Player.js';
import CanvasUtil from '../CanvasUtil.js';
import GameObject from '../GameObjects/GameObject.js';
import Rock from '../GameObjects/Rock.js';

export default class LevelOne extends Scene {
  private player: Player;

  private gameObject: GameObject[] = [];

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.background = CanvasUtil.loadNewImage('./assets/backgroundLevelOne.png');
    this.player = new Player(maxX, maxY);
    this.gameObject.push(new Rock(this.maxX, this.maxY));
    this.gameObject.push(new Rock(this.maxX, this.maxY));
    this.gameObject.push(new Rock(this.maxX, this.maxY));
  }

  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed(KeyListener.KEY_ESC)) {
      window.location.reload();
    }
    if (keyListener.isKeyDown(KeyListener.KEY_W)) {
      this.player.moveUp();
      this.gameObject.forEach((rock: Rock) => {
        rock.moveUp();
      });
    }
    if (keyListener.isKeyDown(KeyListener.KEY_A)) {
      this.player.moveLeft();
      this.gameObject.forEach((rock: Rock) => {
        rock.moveLeft();
      });
    }
    if (keyListener.isKeyDown(KeyListener.KEY_S)) {
      this.player.moveDown();
      this.gameObject.forEach((rock: Rock) => {
        rock.moveDown();
      });
    }
    if (keyListener.isKeyDown(KeyListener.KEY_D)) {
      this.player.moveRight();
      this.gameObject.forEach((rock: Rock) => {
        rock.moveRight();
      });
    }
    if (keyListener.keyPressed(KeyListener.KEY_E)) {
      this.gameObject.forEach((object: GameObject) => {
        if (this.player.collideWithObject(object)) {
          if (object instanceof Rock) {
            object.interacted();
          }
        }
      });
    }
  }

  public update(elapsed: number): Scene {
    console.log(elapsed);
    console.log(this.maxX);
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

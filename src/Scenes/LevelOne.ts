/* eslint-disable max-len */
/* eslint-disable jsdoc/require-jsdoc */
import KeyListener from '../KeyListener.js';
import Scene from './Scene.js';
import Player from '../Player.js';
import CanvasUtil from '../CanvasUtil.js';
import GameObject from '../GameObjects/GameObject.js';
import Rock from '../GameObjects/Rock.js';
import Helper from '../GameObjects/Helper.js';

export default class LevelOne extends Scene {
  private player: Player;

  private helper: Helper;

  private gameObjects: GameObject[] = [];

  private playableAreaX:number;

  private playableAreaY:number;

  private playableAreaMaxX:number;

  private playableAreaMaxY: number;

  private isUsing: boolean;

  private hasRock: boolean;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.background = CanvasUtil.loadNewImage('./assets/backgroundLevelOne.png');
    this.player = new Player();
    this.helper = new Helper(600, 700);

    this.playableAreaMaxX = maxX / 2;
    this.playableAreaMaxY = 865;
    this.playableAreaX = 0;
    this.playableAreaY = 290;

    this.gameObjects.push(new Rock(600, 300));
    this.gameObjects.push(new Rock(300, 550));
    this.gameObjects.push(new Rock(550, 750));

    this.isUsing = false;
    this.hasRock = false;
  }

  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed(KeyListener.KEY_ESC)) window.location.reload();
    if (keyListener.isKeyDown(KeyListener.KEY_W) && (this.player.getPosY() + this.player.getHeight() > this.playableAreaY)) this.player.moveUp();
    if (keyListener.isKeyDown(KeyListener.KEY_S) && (this.player.getPosY() + this.player.getHeight() < this.playableAreaMaxY)) this.player.moveDown();
    if (keyListener.isKeyDown(KeyListener.KEY_A) && (this.player.getPosX() > this.playableAreaX)) this.player.moveLeft();
    if (keyListener.isKeyDown(KeyListener.KEY_D) && (this.player.getPosX() < this.playableAreaMaxX)) this.player.moveRight();
    if (keyListener.keyPressed(KeyListener.KEY_E)) this.isUsing = true;
  }

  public update(elapsed: number): Scene {
    this.gameObjects.forEach((rock: Rock) => {
      if (this.isUsing && this.player.collideWithObject(rock) && !this.hasRock) {
        this.hasRock = true;
        rock.setStatusCarried(true);
      } else if (this.isUsing && this.player.collideWithObject(rock) && this.hasRock) {
        this.hasRock = false;
        rock.setStatusCarried(false);
      }
    });
    this.gameObjects.forEach((object: GameObject) => {
      if (object instanceof Rock && this.player.collideWithObject(object) && object.getStatusCarried() && this.hasRock) {
        object.setPosX(this.player.getPosX() + this.player.getWidth() * 0.65);
        object.setPosY(this.player.getPosY() + this.player.getHeight() * 0.45);
      }
    });
    this.isUsing = false;
    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.drawImage(canvas, this.background, 0, 0);
    this.gameObjects.forEach((object: GameObject) => object.render(canvas));
    this.player.render(canvas);
    this.gameObjects.forEach((object: GameObject) => {
      if (this.player.collideWithObject(object) && this.player.collideWithObject(object) && this.player.getPosY() + this.player.getHeight() < object.getPosY() + object.getHeight()) {
        object.render(canvas);
      }
    });
    this.helper.render(canvas);
  }
}

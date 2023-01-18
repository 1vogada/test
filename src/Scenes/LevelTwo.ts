/* eslint-disable max-len */
/* eslint-disable jsdoc/require-jsdoc */
import Scene from './Scene.js';
import Player from '../Player.js';
import CanvasUtil from '../CanvasUtil.js';
import GameObject from '../GameObjects/GameObject.js';
import KeyListener from '../KeyListener.js';
import Papy from '../GameObjects/LevelTwo/Papy.js';

export default class LevelTwo extends Scene {
  private player: Player;

  private gameObjects: GameObject[] = [];

  private isCorrect: boolean;

  // Playable area: MAIN
  private playableAreaMainX: number;

  private playableAreaMainY: number;

  private playableAreaMainMaxX: number;

  private playableAreaMainMaxY: number;

  // Playable area: RIGHT
  private playableAreaRightX: number;

  private playableAreaRightY: number;

  private playableAreaRightMaxX: number;

  private playableAreaRightMaxY: number;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.background = CanvasUtil.loadNewImage('./assets/LevelTwo/backgroundLeveltwo.png');
    this.player = new Player();
    this.gameObjects.push(new Papy(600, 700));

    this.playableAreaMainMaxX = 1430;
    this.playableAreaMainMaxY = 905;
    this.playableAreaMainX = 130;
    this.playableAreaMainY = 390;

    this.playableAreaRightMaxX = maxX;
    this.playableAreaRightMaxY = 730;
    this.playableAreaRightX = 1430;
    this.playableAreaRightY = 500;

    this.isCorrect = false;
  }

  /**
   *
   * @param keyListener АС
   */
  public processInput(keyListener: KeyListener): void {
    const playerPosY: number = this.player.getPosY() + this.player.getHeight();
    const playerPosX: number = this.player.getPosX();

    if (keyListener.isKeyDown(KeyListener.KEY_W) || keyListener.isKeyDown(KeyListener.KEY_UP)) {
      if (!this.isCorrect && playerPosY > this.playableAreaMainY) this.player.moveUp();
      else if (this.isCorrect && playerPosX > this.playableAreaRightX && playerPosY > this.playableAreaRightY) this.player.moveUp();
      else if (this.isCorrect && playerPosX - 10 < this.playableAreaRightX && playerPosY > this.playableAreaMainY) this.player.moveUp();
    }
    if (keyListener.isKeyDown(KeyListener.KEY_S) || keyListener.isKeyDown(KeyListener.KEY_DOWN)) {
      if (!this.isCorrect && playerPosY < this.playableAreaMainMaxY) this.player.moveDown();
      else if (this.isCorrect && playerPosX > this.playableAreaRightX && playerPosY < this.playableAreaRightMaxY) this.player.moveDown();
      else if (this.isCorrect && playerPosX - 10 < this.playableAreaRightX && playerPosY < this.playableAreaMainMaxY) this.player.moveDown();
    }
    if (keyListener.isKeyDown(KeyListener.KEY_A) || keyListener.isKeyDown(KeyListener.KEY_LEFT)) {
      if (playerPosX > this.playableAreaMainX) this.player.moveLeft();
    }
    if (keyListener.isKeyDown(KeyListener.KEY_D) || keyListener.isKeyDown(KeyListener.KEY_RIGHT)) {
      if (!this.isCorrect && playerPosX < this.playableAreaMainMaxX) this.player.moveRight();
      else if (this.isCorrect && playerPosY + 10 > this.playableAreaRightY && playerPosY - 10 < this.playableAreaRightMaxY && playerPosX < this.playableAreaRightMaxX) this.player.moveRight();
      else if (this.isCorrect && playerPosX < this.playableAreaMainMaxX) this.player.moveRight();
    }

    if (keyListener.keyPressed(KeyListener.KEY_O)) this.isCorrect = true;
  }

  public update(elapsed: number): Scene {
    console.log(this.maxX);
    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.drawImage(canvas, this.background, 0, 0);
    this.player.render(canvas);
    this.gameObjects.forEach((object: GameObject) => object.render(canvas));
  }
}

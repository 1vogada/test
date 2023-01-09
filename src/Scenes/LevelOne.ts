/* eslint-disable max-len */
/* eslint-disable jsdoc/require-jsdoc */
import KeyListener from '../KeyListener.js';
import Scene from './Scene.js';
import Player from '../Player.js';
import CanvasUtil from '../CanvasUtil.js';
import GameObject from '../GameObjects/GameObject.js';
import Rock from '../GameObjects/Rock.js';
import Helper from '../GameObjects/Helper.js';
import Bridge from '../GameObjects/Bridge.js';

export default class LevelOne extends Scene {
  private player: Player;

  private helper: Helper;

  private gameObjects: GameObject[] = [];

  private playableAreaLeftX:number;

  private playableAreaLeftY:number;

  private playableAreaLeftMaxX:number;

  private playableAreaLeftMaxY: number;

  private playableAreaBridgeX:number;

  private playableAreaBridgeY:number;

  private playableAreaBridgeMaxX:number;

  private playableAreaBridgeMaxY: number;

  private isUsing: boolean;

  private hasRock: boolean;

  private isTalking: boolean;

  private isCorrect: boolean;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.background = CanvasUtil.loadNewImage('./assets/backgroundLevelOne.png');
    this.player = new Player();
    this.gameObjects.push(new Helper(600, 700));

    this.playableAreaLeftMaxX = maxX / 2;
    this.playableAreaLeftMaxY = 865;
    this.playableAreaLeftX = 0;
    this.playableAreaLeftY = 290;

    this.playableAreaBridgeMaxX = 1350;
    this.playableAreaBridgeMaxY = 850;
    this.playableAreaBridgeX = maxX / 2;
    this.playableAreaBridgeY = 750;

    this.gameObjects.push(new Rock(600, 300));
    this.gameObjects.push(new Rock(300, 550));
    this.gameObjects.push(new Rock(550, 750));
    this.gameObjects.push(new Bridge(1050, 300));
    this.gameObjects.push(new Bridge(1150, 550));
    this.gameObjects.push(new Bridge(1250, 750));

    this.isUsing = false;
    this.hasRock = false;
    this.isTalking = false;
    this.isCorrect = false;
  }

  public processInput(keyListener: KeyListener): void {
    const playerPosY: number = this.player.getPosY() + this.player.getHeight();
    const playerPosX: number = this.player.getPosX();

    if (keyListener.keyPressed(KeyListener.KEY_ESC)) window.location.reload();
    if (keyListener.isKeyDown(KeyListener.KEY_W)) {
      if (!this.isCorrect && playerPosY > this.playableAreaLeftY) this.player.moveUp();
      if (this.isCorrect) {
        if (playerPosX > this.playableAreaBridgeX && playerPosY > this.playableAreaBridgeY) this.player.moveUp();
        else if (playerPosX < this.playableAreaBridgeX && playerPosY > this.playableAreaLeftY) this.player.moveUp();
      }
    }
    if (keyListener.isKeyDown(KeyListener.KEY_S)) {
      if (!this.isCorrect && playerPosY < this.playableAreaLeftMaxY) this.player.moveDown();
      if (this.isCorrect) {
        if (playerPosY < this.playableAreaLeftMaxY) this.player.moveDown();
      }
    }
    if (keyListener.isKeyDown(KeyListener.KEY_A)) {
      if (!this.isCorrect && playerPosX > this.playableAreaLeftX) this.player.moveLeft();
      if (this.isCorrect) {
        if (playerPosX > this.playableAreaLeftX) this.player.moveLeft();
      }
    }
    if (keyListener.isKeyDown(KeyListener.KEY_D)) {
      if (!this.isCorrect && playerPosX < this.playableAreaLeftMaxX) this.player.moveRight();
      if (this.isCorrect) {
        if (playerPosY + 10 > this.playableAreaBridgeY && playerPosX < this.playableAreaBridgeMaxX) this.player.moveRight();
        if (playerPosY < this.playableAreaBridgeY && playerPosX + 10 < this.playableAreaLeftMaxX) this.player.moveRight();
      }
    }
    if (keyListener.keyPressed(KeyListener.KEY_E)) this.isUsing = true;
    if (keyListener.keyPressed(KeyListener.KEY_2) && this.isTalking) this.isCorrect = true;
  }

  public update(elapsed: number): Scene {
    // Rock pickup and drop
    this.gameObjects.forEach((rock: Rock) => {
      if (this.isUsing && this.player.collideWithObject(rock) && rock instanceof Rock) {
        if (!this.hasRock) {
          this.hasRock = true;
          rock.setStatusCarried(true);
        } else if (this.hasRock) {
          this.hasRock = false;
          rock.setStatusCarried(false);
        }
      }
    });
    // rock movement when picked up
    this.gameObjects.forEach((object: GameObject) => {
      if (object instanceof Rock && this.player.collideWithObject(object) && object.getStatusCarried() && this.hasRock) {
        object.setPosX(this.player.getPosX() + this.player.getWidth() * 0.65);
        object.setPosY(this.player.getPosY() + this.player.getHeight() * 0.45);
      }
      if (object instanceof Helper && this.player.collideWithObject(object) && this.isUsing) {
        this.isTalking = true;
      }
    });
    if (this.isCorrect) {
      this.gameObjects.forEach((object: GameObject) => {
        if (object instanceof Bridge && object.getPosY() < 750) {
          object.setPosY(object.getPosY() + elapsed * 0.2);
        }
      });
    }

    this.isUsing = false;
    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.drawImage(canvas, this.background, 0, 0);
    this.gameObjects.forEach((object: GameObject) => object.render(canvas));
    this.player.render(canvas);
    // Render forward things closer and further things behind
    this.gameObjects.forEach((object: GameObject) => {
      if (object instanceof Rock && this.player.collideWithObject(object) && this.player.collideWithObject(object) && this.player.getPosY() + this.player.getHeight() < object.getPosY() + object.getHeight()) {
        object.render(canvas);
      }
    });

    this.gameObjects.forEach((object: GameObject) => {
      if (this.isTalking) {
        CanvasUtil.fillRectangle(canvas, 50, 50, 500, 200, 'black');
        CanvasUtil.writeTextToCanvas(canvas, 'What u do', 60, 100, 'left', 'sans-serif', 25, 'white');
        CanvasUtil.writeTextToCanvas(canvas, '1', 60, 130, 'left', 'sans-serif', 25, 'white');
        CanvasUtil.writeTextToCanvas(canvas, '2', 60, 160, 'left', 'sans-serif', 25, 'white');
        CanvasUtil.writeTextToCanvas(canvas, '3', 60, 190, 'left', 'sans-serif', 25, 'white');
        if (this.isCorrect) {
          CanvasUtil.fillRectangle(canvas, 50, 50, 500, 200, 'black');
          CanvasUtil.writeTextToCanvas(canvas, 'U can pass now', 60, 100, 'left', 'sans-serif', 25, 'white');
        }
      }
    });
  }
}

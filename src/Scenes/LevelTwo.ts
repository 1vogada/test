/* eslint-disable max-len */
/* eslint-disable jsdoc/require-jsdoc */
import Scene from './Scene.js';
import Player from '../Player.js';
import Crowbar from '../GameObjects/LevelTwo/Crowbar.js';
import CanvasUtil from '../CanvasUtil.js';
import GameObject from '../GameObjects/GameObject.js';
import KeyListener from '../KeyListener.js';
import Papy from '../GameObjects/LevelTwo/Papy.js';
import Key from '../GameObjects/LevelTwo/Key.js';
import Donald from '../GameObjects/LevelTwo/Donald.js';
import MusicPlayer from '../MusicPlayer.js';
import SoundEffectPlayer from '../SoundEffectPlayer.js';
import Chest from '../GameObjects/LevelTwo/Chest.js';
import DialogueLevelTwo from '../Dialogue/DialogueLevelTwo.js';

export default class LevelTwo extends Scene {
  private player: Player;

  private gameObjects: GameObject[] = [];

  private music: MusicPlayer;

  private dialogueCrowbar: DialogueLevelTwo;

  private dialogueCrowbarStarted: boolean;

  private dialogueKey: DialogueLevelTwo;

  private dialogueKeyStarted: boolean;

  private soundEffect: SoundEffectPlayer;

  private isCorrect: boolean;

  private isUsing: boolean;

  private hasCrowbar: boolean;

  private isTalking: boolean;

  private numOfSetPlates: number;

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
    this.player = new Player(120, 300);
    this.gameObjects.push(new Papy(780, 230));
    this.gameObjects.push(new Key(300, 500));
    this.gameObjects.push(new Donald(1800, 500));
    this.music = new MusicPlayer();

    this.playableAreaMainMaxX = 1430;
    this.playableAreaMainMaxY = 905;
    this.playableAreaMainX = 130;
    this.playableAreaMainY = 390;

    this.playableAreaRightMaxX = maxX;
    this.playableAreaRightMaxY = 730;
    this.playableAreaRightX = 1430;
    this.playableAreaRightY = 500;

    this.gameObjects.push(new Crowbar(600, 300, true));

    this.gameObjects.push(new Chest(1250, 700));

    this.isUsing = false;
    this.hasCrowbar = false;
    this.isTalking = false;
    this.isCorrect = false;
    this.numOfSetPlates = 0;
    this.dialogueCrowbarStarted = false;
    this.dialogueKeyStarted = false;
    this.music.playSound('levelTwoMusic');
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

    // Player USE Button
    if (keyListener.keyPressed(KeyListener.KEY_E)) this.isUsing = true;
    // Button for when the player is in dialogue; SPACE Advances the dialogue further
    if (keyListener.keyPressed(KeyListener.KEY_SPACE) && this.isTalking) {
      this.dialogueCrowbar.upCount(null);
    }
    // Choose option buttons
    if (keyListener.keyPressed(KeyListener.KEY_1) && this.isTalking) {
      this.isUsing = true;
      this.dialogueCrowbar.upCount(1);
    }
    if (keyListener.keyPressed(KeyListener.KEY_3) && this.isTalking) {
      this.isUsing = true;
      this.dialogueCrowbar.upCount(3);
    }
    if (keyListener.keyPressed(KeyListener.KEY_2) && this.isTalking) {
      this.isUsing = true;
      this.dialogueCrowbar.upCount(2);
    }
  }

  public update(elapsed: number): Scene {
    console.log(this.maxX);
    this.gameObjects.forEach((crowbar: Crowbar) => {
      if (this.isUsing && this.player.collideWithObject(crowbar) && crowbar instanceof Crowbar && !crowbar.getIsSpecial()) {
        if (!this.hasCrowbar) {
          this.hasCrowbar = true;
          crowbar.setStatusCarried(true);
        } else if (this.hasCrowbar) {
          this.hasCrowbar = false;
          crowbar.setStatusCarried(false);
        }
      }
    });
    this.gameObjects.forEach((object: GameObject) => {
      if (object instanceof Crowbar && this.player.collideWithObject(object) && object.getStatusCarried() && this.hasCrowbar) {
        object.setPosX(this.player.getPosX() + this.player.getWidth() * 0.65);
        object.setPosY(this.player.getPosY() + this.player.getHeight() * 0.45);
      }
      if (object instanceof Papy && this.player.collideWithObject(object) && this.isUsing) {
        this.isTalking = true;
      }
    });
    this.gameObjects.forEach((crowbar: GameObject) => {
      this.gameObjects.forEach((chest: GameObject) => {
        if (crowbar instanceof Crowbar && chest instanceof Chest && crowbar.collideWithObject(chest) && !crowbar.getStatusCarried()) {
          chest.unlockChest();
          // Locks the rock in place and snaps it to the appropriate position
          crowbar.setIsSpecial(true);
          crowbar.setPosX(chest.getPosX() - 5000);
        }
      });
    });
    // this.gameObjects.forEach((chest: GameObject) => {
    //   if (chest instanceof Chest && chest.getIsSet()) this.numOfSetPlates += 1;
    //   if (this.numOfSetPlates === 3) {
    //     this.isInCutscene = true;
    //     this.isCorrect = true;
    //   }
    // });
    this.numOfSetPlates = 0;

    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.drawImage(canvas, this.background, 0, 0);
    this.player.render(canvas);
    this.gameObjects.forEach((object: GameObject) => object.render(canvas));
    if (this.isTalking && !this.dialogueCrowbarStarted) {
      this.dialogueCrowbar = new DialogueLevelTwo(500, 500, 'Crowbar');
      this.dialogueCrowbarStarted = true;
    }
    if (this.dialogueCrowbarStarted) {
      this.dialogueCrowbar.render(canvas);
    }
  }
}

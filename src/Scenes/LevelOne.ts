/* eslint-disable max-len */
/* eslint-disable jsdoc/require-jsdoc */
import KeyListener from '../KeyListener.js';
import Scene from './Scene.js';
import Player from '../Player.js';
import CanvasUtil from '../CanvasUtil.js';
import GameObject from '../GameObjects/GameObject.js';
import Rock from '../GameObjects/LevelOne/Rock.js';
import Helper from '../GameObjects/LevelOne/Helper.js';
import Bridge from '../GameObjects/LevelOne/Bridge.js';
import Plate from '../GameObjects/LevelOne/Plate.js';
import DialogueLevelOne from '../Dialogue/DialogueLevelOne.js';
import SoundEffectPlayer from '../SoundEffectPlayer.js';
import MusicPlayer from '../MusicPlayer.js';

export default class LevelOne extends Scene {
  private soundEffect: SoundEffectPlayer;

  private music: MusicPlayer;

  private player: Player;

  private dialogue: DialogueLevelOne;

  private dialogueStarted: boolean;

  private gameObjects: GameObject[] = [];

  private isFullScreen: boolean;

  private firstRun: boolean;

  // Playable area: LEFT
  private playableAreaLeftX: number;

  private playableAreaLeftY: number;

  private playableAreaLeftMaxX: number;

  private playableAreaLeftMaxY: number;

  // Playable area: BRIDGE
  private playableAreaBridgeX: number;

  private playableAreaBridgeY: number;

  private playableAreaBridgeMaxX: number;

  private playableAreaBridgeMaxY: number;

  // Playable area: RIGHT
  private playableAreaRightX: number;

  private playableAreaRightY: number;

  private playableAreaRightMaxX: number;

  private playableAreaRightMaxY: number;

  // Playable area: END
  private playableAreaEndX: number;

  private playableAreaEndY: number;

  private playableAreaEndMaxX: number;

  private playableAreaEndMaxY: number;

  private isUsing: boolean;

  private hasRock: boolean;

  private isTalking: boolean;

  private isCorrect: boolean;

  private numOfSetPlates: number;

  private isInCutscene: boolean;

  private cutsceneTimeLeft: number;

  private blackBarLength: number;

  // Sound gates
  private musicStartGate: boolean;

  private winSoundGate: boolean;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.background = CanvasUtil.loadNewImage('./assets/backgroundLevelOne.png');
    this.player = new Player();
    this.gameObjects.push(new Helper(600, 700));
    this.soundEffect = new SoundEffectPlayer();
    this.music = new MusicPlayer();
    this.isFullScreen = false;

    this.playableAreaLeftMaxX = maxX / 2;
    this.playableAreaLeftMaxY = 865;
    this.playableAreaLeftX = 0;
    this.playableAreaLeftY = 290;

    this.playableAreaBridgeMaxX = 1350;
    this.playableAreaBridgeMaxY = 850;
    this.playableAreaBridgeX = maxX / 2;
    this.playableAreaBridgeY = 750;

    this.playableAreaRightMaxX = 1550;
    this.playableAreaRightMaxY = 865;
    this.playableAreaRightX = 1350;
    this.playableAreaRightY = 290;

    this.playableAreaEndMaxX = maxX;
    this.playableAreaEndMaxY = 675;
    this.playableAreaEndX = 1550;
    this.playableAreaEndY = 510;

    this.gameObjects.push(new Rock(600, 300, false));
    this.gameObjects.push(new Rock(300, 550, false));
    this.gameObjects.push(new Rock(550, 750, true));
    this.gameObjects.push(new Bridge(1048, 300));
    this.gameObjects.push(new Bridge(1154, 550));
    this.gameObjects.push(new Bridge(1259, 750));
    this.gameObjects.push(new Plate(900, 300));
    this.gameObjects.push(new Plate(900, 450));
    this.gameObjects.push(new Plate(900, 600));

    this.isUsing = false;
    this.hasRock = false;
    this.isTalking = false;
    this.isCorrect = false;
    this.numOfSetPlates = 0;
    this.cutsceneTimeLeft = 4500;
    this.blackBarLength = 0;
    this.isInCutscene = false;
    this.dialogueStarted = false;
    this.firstRun = true;
    // sound bools and other sound stuff
    this.musicStartGate = true;
    this.winSoundGate = true;
    // Music start
    this.music.playSound('levelOneMusic');
  }

  public processInput(keyListener: KeyListener): void {
    const playerPosY: number = this.player.getPosY() + this.player.getHeight();
    const playerPosX: number = this.player.getPosX();

    // Servers as a debugging function
    if (keyListener.keyPressed(KeyListener.KEY_O)) this.numOfSetPlates = 0;
    if (keyListener.keyPressed(KeyListener.KEY_P)) this.numOfSetPlates = 3;

    // Reloads the game (page reload)
    if (keyListener.keyPressed(KeyListener.KEY_ESC)) window.location.reload();

    // Player movement
    // Disables movement when the player is in a Cutscene
    if (!this.isInCutscene) {
      // Player Move UP
      if (keyListener.isKeyDown(KeyListener.KEY_W) || keyListener.isKeyDown(KeyListener.KEY_UP)) {
        if (!this.isCorrect && playerPosY > this.playableAreaLeftY) this.player.moveUp();
        if (this.isCorrect) {
          if (playerPosX > this.playableAreaBridgeX && playerPosY - 20 > this.playableAreaBridgeY) this.player.moveUp();
          else if (playerPosX < this.playableAreaBridgeX && playerPosY > this.playableAreaLeftY) this.player.moveUp();
          else if (playerPosX > this.playableAreaRightX && playerPosX - 10 < this.playableAreaRightMaxX && playerPosY > this.playableAreaRightY) this.player.moveUp();
          else if (playerPosX > this.playableAreaEndX && playerPosY > this.playableAreaEndY) this.player.moveUp();
        }
      }
      // Player Move DOWN
      if (keyListener.isKeyDown(KeyListener.KEY_S) || keyListener.isKeyDown(KeyListener.KEY_DOWN)) {
        if (!this.isCorrect && playerPosY < this.playableAreaLeftMaxY) this.player.moveDown();
        if (this.isCorrect) {
          if (playerPosY < this.playableAreaLeftMaxY && playerPosX - 10 < this.playableAreaEndX) this.player.moveDown();
          else if (playerPosX > this.playableAreaEndX && playerPosY < this.playableAreaEndMaxY) this.player.moveDown();
        }
      }
      // Player Move LEFT
      if (keyListener.isKeyDown(KeyListener.KEY_A) || keyListener.isKeyDown(KeyListener.KEY_LEFT)) {
        if (!this.isCorrect && playerPosX > this.playableAreaLeftX) this.player.moveLeft();
        if (this.isCorrect) {
          if (playerPosX > this.playableAreaLeftX && playerPosX < this.playableAreaLeftMaxX) this.player.moveLeft();
          else if (playerPosX - 10 > this.playableAreaRightX && playerPosY < this.playableAreaBridgeY) this.player.moveLeft();
          else if (playerPosY > this.playableAreaBridgeY && (playerPosX > this.playableAreaRightX || playerPosX > this.playableAreaBridgeX)) this.player.moveLeft();
        }
      }
      // Player Move RIGHT
      if (keyListener.isKeyDown(KeyListener.KEY_D) || keyListener.isKeyDown(KeyListener.KEY_RIGHT)) {
        if (!this.isCorrect && playerPosX < this.playableAreaLeftMaxX) this.player.moveRight();
        if (this.isCorrect) {
          if (playerPosY + 10 > this.playableAreaBridgeY && playerPosX < this.playableAreaBridgeMaxX) this.player.moveRight();
          else if (playerPosY < this.playableAreaBridgeY && playerPosX + 10 < this.playableAreaLeftMaxX) this.player.moveRight();
          else if (playerPosX > this.playableAreaRightX && playerPosX < this.playableAreaRightMaxX) this.player.moveRight();
          else if (playerPosX > this.playableAreaEndX && playerPosY + 10 > this.playableAreaEndY && playerPosY - 10 < this.playableAreaEndMaxY) this.player.moveRight();
        }
      }
      // Player USE Button
      if (keyListener.keyPressed(KeyListener.KEY_E)) this.isUsing = true;
      // Button for when the player is in dialogue; SPACE Advances the dialogue further
      if (keyListener.keyPressed(KeyListener.KEY_SPACE) && this.isTalking) {
        this.dialogue.upCount('');
      }
      // Choose option buttons
      if (keyListener.keyPressed(KeyListener.KEY_1) && this.isTalking) {
        this.isUsing = true;
        this.dialogue.upCount('A');
      }
      if (keyListener.keyPressed(KeyListener.KEY_3) && this.isTalking) {
        this.isUsing = true;
        this.dialogue.upCount('C');
      }
      if (keyListener.keyPressed(KeyListener.KEY_2) && this.isTalking) {
        this.isUsing = true;
        this.dialogue.upCount('B');
        this.gameObjects.forEach((object: GameObject) => {
          if (object instanceof Rock && object.getIsSpecial()) object.setIsSpecial(false);
        });
      }
    }
  }

  public update(elapsed: number): Scene {
    // Rock pickup and drop
    this.gameObjects.forEach((rock: Rock) => {
      if (this.isUsing && this.player.collideWithObject(rock) && rock instanceof Rock && !rock.getIsSpecial()) {
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

    // Logic for when the pressure plate is pressed by a rock
    this.gameObjects.forEach((rock: GameObject) => {
      this.gameObjects.forEach((plate: GameObject) => {
        if (rock instanceof Rock && plate instanceof Plate && rock.collideWithObject(plate) && !rock.getStatusCarried()) {
          plate.setIsSet(true);
          // Locks the rock in place and snaps it to the appropriate position
          rock.setIsSpecial(true);
          rock.setPosX(plate.getPosX() - 5);
          rock.setPosY(plate.getPosY() - rock.getHeight() * 0.3);
        }
      });
    });

    this.gameObjects.forEach((plate: GameObject) => {
      if (plate instanceof Plate && plate.getIsSet()) this.numOfSetPlates += 1;
      if (this.numOfSetPlates === 3) {
        this.isInCutscene = true;
        this.isCorrect = true;
      }
    });
    this.numOfSetPlates = 0;

    if (this.isCorrect) {
      this.gameObjects.forEach((object: GameObject) => {
        if (object instanceof Bridge && object.getPosY() < 750 && this.cutsceneTimeLeft < 3500) {
          object.setPosY(object.getPosY() + elapsed * 0.15);
        }
      });
    }

    if (this.isInCutscene) this.cutsceneTimeLeft -= elapsed;
    if (this.cutsceneTimeLeft < 0) this.isInCutscene = false;
    if (this.isInCutscene && this.blackBarLength <= 100) {
      this.blackBarLength += elapsed * 0.1;
    }
    if (!this.isInCutscene && this.blackBarLength >= 0 && this.cutsceneTimeLeft < 0) {
      console.log('test');
      this.blackBarLength -= elapsed * 0.1;
    }
    console.log(`Cutscene: ${this.isInCutscene}`);
    console.log(this.cutsceneTimeLeft);
    this.isUsing = false;

    if (this.dialogueStarted) {
      if (this.dialogue.getIsFinished()) {
        this.gameObjects.forEach((object: GameObject) => {
          if (object instanceof Helper) {
            object.moveSans();
          }
        });
      }
    }
    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.drawImage(canvas, this.background, 0, 0);
    this.gameObjects.forEach((object: GameObject) => object.render(canvas));
    this.player.render(canvas);

    // renders rocks infront of plates
    this.gameObjects.forEach((rock: GameObject) => {
      this.gameObjects.forEach((plate: GameObject) => {
        if (rock instanceof Rock && plate instanceof Plate && rock.collideWithObject(plate) && !rock.getStatusCarried()) {
          plate.render(canvas);
          rock.render(canvas);
          if (plate.getIsSet()) this.player.render(canvas);
        }
      });
    });

    // Render forward things closer and further things behind
    this.gameObjects.forEach((object: GameObject) => {
      if ((object instanceof Rock || object instanceof Helper) && this.player.collideWithObject(object) && this.player.collideWithObject(object) && this.player.getPosY() + this.player.getHeight() < object.getPosY() + object.getHeight()) {
        object.render(canvas);
      }
    });

    if (this.isTalking && !this.dialogueStarted) {
      this.dialogue = new DialogueLevelOne(500, 500);
      this.dialogueStarted = true;
    }
    if (this.dialogueStarted) {
      this.dialogue.render(canvas);
    }

    CanvasUtil.fillRectangle(canvas, 0, 0, canvas.width, this.blackBarLength, 'black');
    CanvasUtil.fillRectangle(canvas, 0, canvas.height - this.blackBarLength, canvas.width, 1 + this.blackBarLength, 'black');

    if (this.player.getPosX() > this.playableAreaEndMaxX) {
      this.isInCutscene = true;
      CanvasUtil.fillCanvas(canvas, 'white');
      CanvasUtil.writeTextToCanvas(canvas, 'YOU WIN', 600, 600, 'center', 'sans-serif', 50, 'black');
      if (this.winSoundGate) {
        this.music.stopSound();
        this.soundEffect.playSound('win');
        this.winSoundGate = false;
      }
    }
  }
}

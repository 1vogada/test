import KeyListener from '../KeyListener.js';
import Player from '../Player.js';
import CanvasUtil from '../CanvasUtil.js';
import Rock from '../GameObjects/LevelOne/Rock.js';
import Bridge from '../GameObjects/LevelOne/Bridge.js';
import Plate from '../GameObjects/LevelOne/Plate.js';
import DialogueLevelOne from '../Dialogue/DialogueLevelOne.js';
import Sans from '../GameObjects/LevelOne/Sans.js';
import LevelTwo from './LevelTwo.js';
import Level from './Level.js';
export default class LevelOne extends Level {
    dialogue;
    dialogueStarted;
    playableAreaLeftX;
    playableAreaLeftY;
    playableAreaLeftMaxX;
    playableAreaLeftMaxY;
    playableAreaBridgeX;
    playableAreaBridgeY;
    playableAreaBridgeMaxX;
    playableAreaRightX;
    playableAreaRightY;
    playableAreaRightMaxX;
    playableAreaEndX;
    playableAreaEndY;
    playableAreaEndMaxX;
    playableAreaEndMaxY;
    hasRock;
    numOfSetPlates;
    isInCutscene;
    cutsceneTimeLeft;
    blackBarLength;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.background = CanvasUtil.loadNewImage('./assets/LevelOne/backgroundLevelOne.png');
        this.player = new Player(400, 400);
        this.playableAreaLeftMaxX = maxX / 2;
        this.playableAreaLeftMaxY = 865;
        this.playableAreaLeftX = 0;
        this.playableAreaLeftY = 290;
        this.playableAreaBridgeMaxX = 1350;
        this.playableAreaBridgeX = maxX / 2;
        this.playableAreaBridgeY = 750;
        this.playableAreaRightMaxX = 1550;
        this.playableAreaRightX = 1350;
        this.playableAreaRightY = 290;
        this.playableAreaEndMaxX = maxX;
        this.playableAreaEndMaxY = 675;
        this.playableAreaEndX = 1550;
        this.playableAreaEndY = 510;
        this.gameObjects.push(new Bridge(1048, 300));
        this.gameObjects.push(new Bridge(1154, 550));
        this.gameObjects.push(new Bridge(1259, 750));
        this.gameObjects.push(new Plate(900, 300));
        this.gameObjects.push(new Plate(900, 450));
        this.gameObjects.push(new Plate(900, 600));
        this.gameObjects.push(new Rock(600, 300, false));
        this.gameObjects.push(new Rock(300, 550, false));
        this.gameObjects.push(new Rock(550, 750, true));
        this.gameObjects.push(new Sans(600, 700));
        this.hasRock = false;
        this.numOfSetPlates = 0;
        this.cutsceneTimeLeft = 4500;
        this.blackBarLength = 0;
        this.isInCutscene = false;
        this.dialogueStarted = false;
        this.music.playSound('levelOneMusic');
    }
    processInput(keyListener) {
        const playerPosY = this.player.getPosY() + this.player.getHeight();
        const playerPosX = this.player.getPosX();
        if (keyListener.keyPressed(KeyListener.KEY_T)) {
            if (this.tutorial.getActive())
                this.tutorial.setActive(false);
            else
                this.tutorial.setActive(true);
        }
        if (keyListener.keyPressed(KeyListener.KEY_P))
            this.numOfSetPlates = 3;
        if (keyListener.keyPressed(KeyListener.KEY_ESC))
            window.location.reload();
        if (!this.isInCutscene) {
            if (keyListener.isKeyDown(KeyListener.KEY_W) || keyListener.isKeyDown(KeyListener.KEY_UP)) {
                if (!this.isCorrect && playerPosY > this.playableAreaLeftY)
                    this.player.moveUp();
                if (this.isCorrect) {
                    if (playerPosX > this.playableAreaBridgeX && playerPosY - 20 > this.playableAreaBridgeY)
                        this.player.moveUp();
                    else if (playerPosX < this.playableAreaBridgeX && playerPosY > this.playableAreaLeftY)
                        this.player.moveUp();
                    else if (playerPosX > this.playableAreaRightX && playerPosX - 10 < this.playableAreaRightMaxX && playerPosY > this.playableAreaRightY)
                        this.player.moveUp();
                    else if (playerPosX > this.playableAreaEndX && playerPosY > this.playableAreaEndY)
                        this.player.moveUp();
                }
            }
            if (keyListener.isKeyDown(KeyListener.KEY_S) || keyListener.isKeyDown(KeyListener.KEY_DOWN)) {
                if (!this.isCorrect && playerPosY < this.playableAreaLeftMaxY)
                    this.player.moveDown();
                if (this.isCorrect) {
                    if (playerPosY < this.playableAreaLeftMaxY && playerPosX - 10 < this.playableAreaEndX)
                        this.player.moveDown();
                    else if (playerPosX > this.playableAreaEndX && playerPosY < this.playableAreaEndMaxY)
                        this.player.moveDown();
                }
            }
            if (keyListener.isKeyDown(KeyListener.KEY_A) || keyListener.isKeyDown(KeyListener.KEY_LEFT)) {
                if (!this.isCorrect && playerPosX > this.playableAreaLeftX)
                    this.player.moveLeft();
                if (this.isCorrect) {
                    if (playerPosX > this.playableAreaLeftX && playerPosX < this.playableAreaLeftMaxX)
                        this.player.moveLeft();
                    else if (playerPosX - 10 > this.playableAreaRightX && playerPosY < this.playableAreaBridgeY)
                        this.player.moveLeft();
                    else if (playerPosY > this.playableAreaBridgeY && (playerPosX > this.playableAreaRightX || playerPosX > this.playableAreaBridgeX))
                        this.player.moveLeft();
                }
            }
            if (keyListener.isKeyDown(KeyListener.KEY_D) || keyListener.isKeyDown(KeyListener.KEY_RIGHT)) {
                if (!this.isCorrect && playerPosX < this.playableAreaLeftMaxX)
                    this.player.moveRight();
                if (this.isCorrect) {
                    if (playerPosY + 10 > this.playableAreaBridgeY && playerPosX < this.playableAreaBridgeMaxX)
                        this.player.moveRight();
                    else if (playerPosY < this.playableAreaBridgeY && playerPosX + 10 < this.playableAreaLeftMaxX)
                        this.player.moveRight();
                    else if (playerPosX > this.playableAreaRightX && playerPosX < this.playableAreaRightMaxX)
                        this.player.moveRight();
                    else if (playerPosX > this.playableAreaEndX && playerPosY + 10 > this.playableAreaEndY && playerPosY - 10 < this.playableAreaEndMaxY)
                        this.player.moveRight();
                }
            }
            if (keyListener.keyPressed(KeyListener.KEY_E))
                this.isUsing = true;
            if (keyListener.keyPressed(KeyListener.KEY_SPACE) && this.isTalking) {
                this.dialogue.upCount(null);
            }
            if (keyListener.keyPressed(KeyListener.KEY_1) && this.isTalking) {
                this.dialogue.upCount(1);
            }
            if (keyListener.keyPressed(KeyListener.KEY_2) && this.isTalking) {
                this.dialogue.upCount(2);
                this.gameObjects.forEach((object) => {
                    if (object instanceof Rock && object.getIsSpecial())
                        object.setIsSpecial(false);
                });
            }
            if (keyListener.keyPressed(KeyListener.KEY_3) && this.isTalking) {
                this.dialogue.upCount(3);
            }
        }
    }
    update(elapsed) {
        this.gameObjects.forEach((object) => {
            if (object instanceof Sans && this.dialogueStarted && this.dialogue.getIsFinished())
                object.update();
            if (object instanceof Bridge && this.cutsceneTimeLeft < 3500)
                object.update(elapsed);
            if (object instanceof Plate) {
                this.gameObjects.forEach((rock) => {
                    if (rock instanceof Rock && rock.collideWithObject(object) && !rock.getStatusCarried()) {
                        object.update();
                        rock.setIsSpecial(true);
                        rock.setPosX(object.getPosX() - 5);
                        rock.setPosY(object.getPosY() - rock.getHeight() * 0.3);
                    }
                });
            }
        });
        this.tutorial.update();
        this.gameObjects.forEach((rock) => {
            if (this.isUsing && this.player.collideWithObject(rock) && rock instanceof Rock && !rock.getIsSpecial()) {
                if (!this.hasRock) {
                    this.hasRock = true;
                    rock.setStatusCarried(true);
                }
                else if (this.hasRock) {
                    this.hasRock = false;
                    rock.setStatusCarried(false);
                }
            }
        });
        this.gameObjects.forEach((object) => {
            if (object instanceof Rock && this.player.collideWithObject(object) && object.getStatusCarried() && this.hasRock) {
                object.setPosX(this.player.getPosX() + this.player.getWidth() * 0.65);
                object.setPosY(this.player.getPosY() + this.player.getHeight() * 0.45);
            }
            if (object instanceof Sans && this.player.collideWithObject(object) && this.isUsing) {
                this.isTalking = true;
            }
        });
        this.gameObjects.forEach((plate) => {
            if (plate instanceof Plate && plate.getIsSet())
                this.numOfSetPlates += 1;
            if (this.numOfSetPlates === 3) {
                this.isInCutscene = true;
                this.isCorrect = true;
            }
        });
        this.numOfSetPlates = 0;
        if (this.isInCutscene)
            this.cutsceneTimeLeft -= elapsed;
        if (this.cutsceneTimeLeft < 0)
            this.isInCutscene = false;
        if (this.isInCutscene && this.blackBarLength <= 100) {
            this.blackBarLength += elapsed * 0.1;
        }
        if (!this.isInCutscene && this.blackBarLength >= 0 && this.cutsceneTimeLeft < 0) {
            this.blackBarLength -= elapsed * 0.1;
        }
        this.isUsing = false;
        if (this.player.getPosX() > this.playableAreaEndMaxX) {
            this.music.stopSound();
            return new LevelTwo(this.maxX, this.maxY);
        }
        return null;
    }
    render(canvas) {
        CanvasUtil.clearCanvas(canvas);
        CanvasUtil.drawImage(canvas, this.background, 0, 0);
        this.gameObjects.forEach((object) => object.render(canvas));
        this.player.render(canvas);
        this.gameObjects.forEach((object) => {
            if ((object instanceof Rock || object instanceof Sans) && this.player.collideWithObject(object) && this.player.collideWithObject(object) && this.player.getPosY() + this.player.getHeight() < object.getPosY() + object.getHeight()) {
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
        this.tutorial.render(canvas);
        CanvasUtil.fillRectangle(canvas, 0, 0, canvas.width, this.blackBarLength, 'black');
        CanvasUtil.fillRectangle(canvas, 0, canvas.height - this.blackBarLength, canvas.width, 1 + this.blackBarLength, 'black');
    }
}
//# sourceMappingURL=LevelOne.js.map
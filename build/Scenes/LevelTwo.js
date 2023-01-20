import Player from '../Player.js';
import Crowbar from '../GameObjects/LevelTwo/Crowbar.js';
import CanvasUtil from '../CanvasUtil.js';
import GameObject from '../GameObjects/GameObject.js';
import KeyListener from '../KeyListener.js';
import Papy from '../GameObjects/LevelTwo/Papy.js';
import Key from '../GameObjects/LevelTwo/Key.js';
import Donald from '../GameObjects/LevelTwo/Donald.js';
import Chest from '../GameObjects/LevelTwo/Chest.js';
import DialogueLevelTwo from '../Dialogue/DialogueLevelTwo.js';
import Level from './Level.js';
import SceneEnd from './SceneEnd.js';
export default class LevelTwo extends Level {
    dialogueCrowbar;
    dialogueCrowbarStarted;
    dialogueKey;
    dialogueKeyStarted;
    startDia2;
    hasCrowbar;
    hasKey;
    playableAreaMainX;
    playableAreaMainY;
    playableAreaMainMaxX;
    playableAreaMainMaxY;
    playableAreaRightX;
    playableAreaRightY;
    playableAreaRightMaxX;
    playableAreaRightMaxY;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.background = CanvasUtil.loadNewImage('./assets/LevelTwo/backgroundLeveltwo.png');
        this.player = new Player(120, 300);
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
        this.gameObjects.push(new Key(-500, 750));
        this.gameObjects.push(new Papy(780, 230));
        this.gameObjects.push(new Donald(1500, 500));
        this.hasCrowbar = false;
        this.hasKey = false;
        this.startDia2 = false;
        this.dialogueCrowbarStarted = false;
        this.dialogueKeyStarted = false;
        this.music.playSound('levelTwoMusic');
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
        if (keyListener.isKeyDown(KeyListener.KEY_W) || keyListener.isKeyDown(KeyListener.KEY_UP)) {
            if (!this.isCorrect && playerPosY > this.playableAreaMainY)
                this.player.moveUp();
            else if (this.isCorrect && playerPosX > this.playableAreaRightX && playerPosY > this.playableAreaRightY)
                this.player.moveUp();
            else if (this.isCorrect && playerPosX - 10 < this.playableAreaRightX && playerPosY > this.playableAreaMainY)
                this.player.moveUp();
        }
        if (keyListener.isKeyDown(KeyListener.KEY_S) || keyListener.isKeyDown(KeyListener.KEY_DOWN)) {
            if (!this.isCorrect && playerPosY < this.playableAreaMainMaxY)
                this.player.moveDown();
            else if (this.isCorrect && playerPosX > this.playableAreaRightX && playerPosY < this.playableAreaRightMaxY)
                this.player.moveDown();
            else if (this.isCorrect && playerPosX - 10 < this.playableAreaRightX && playerPosY < this.playableAreaMainMaxY)
                this.player.moveDown();
        }
        if (keyListener.isKeyDown(KeyListener.KEY_A) || keyListener.isKeyDown(KeyListener.KEY_LEFT)) {
            if (playerPosX > this.playableAreaMainX)
                this.player.moveLeft();
        }
        if (keyListener.isKeyDown(KeyListener.KEY_D) || keyListener.isKeyDown(KeyListener.KEY_RIGHT)) {
            if (!this.isCorrect && playerPosX < this.playableAreaMainMaxX)
                this.player.moveRight();
            else if (this.isCorrect && playerPosY + 10 > this.playableAreaRightY && playerPosY - 10 < this.playableAreaRightMaxY && playerPosX < this.playableAreaRightMaxX)
                this.player.moveRight();
            else if (this.isCorrect && playerPosX < this.playableAreaMainMaxX)
                this.player.moveRight();
        }
        if (keyListener.keyPressed(KeyListener.KEY_O))
            this.isCorrect = true;
        if (keyListener.keyPressed(KeyListener.KEY_E))
            this.isUsing = true;
        if (keyListener.keyPressed(KeyListener.KEY_SPACE) && this.isTalking) {
            this.dialogueCrowbar.upCount(null);
            if (this.dialogueKeyStarted)
                this.dialogueKey.upCount(null);
        }
        if (keyListener.keyPressed(KeyListener.KEY_1) && this.isTalking) {
            this.isUsing = true;
            this.dialogueCrowbar.upCount(1);
            if (this.dialogueKeyStarted)
                this.dialogueKey.upCount(1);
        }
        if (keyListener.keyPressed(KeyListener.KEY_2) && this.isTalking) {
            this.isUsing = true;
            this.dialogueCrowbar.upCount(2);
            if (this.dialogueKeyStarted)
                this.dialogueKey.upCount(2);
        }
        if (keyListener.keyPressed(KeyListener.KEY_3) && this.isTalking) {
            this.isUsing = true;
            this.dialogueCrowbar.upCount(3);
            if (this.dialogueKeyStarted)
                this.dialogueKey.upCount(3);
        }
    }
    update(elapsed) {
        this.gameObjects.forEach((object) => {
            if (object instanceof Chest)
                object.update();
            if (object instanceof Donald)
                object.update();
            if (object instanceof Key)
                object.update();
        });
        this.tutorial.update();
        this.gameObjects.forEach((crowbar) => {
            if (this.isUsing && this.player.collideWithObject(crowbar) && crowbar instanceof Crowbar && !crowbar.getIsSpecial()) {
                if (!this.hasCrowbar) {
                    this.hasCrowbar = true;
                    crowbar.setStatusCarried(true);
                }
                else if (this.hasCrowbar) {
                    this.hasCrowbar = false;
                    crowbar.setStatusCarried(false);
                }
            }
            if (this.dialogueCrowbarStarted && this.dialogueCrowbar.getIsFinished() && crowbar instanceof Crowbar)
                crowbar.setIsSpecial(false);
        });
        this.gameObjects.forEach((object) => {
            if (object instanceof Crowbar && this.player.collideWithObject(object) && object.getStatusCarried() && this.hasCrowbar) {
                object.setPosX(this.player.getPosX() + this.player.getWidth() * 0.65);
                object.setPosY(this.player.getPosY() + this.player.getHeight() * 0.15);
            }
            if (object instanceof Papy && this.player.collideWithObject(object) && this.isUsing) {
                this.isTalking = true;
            }
        });
        this.gameObjects.forEach((crowbar) => {
            this.gameObjects.forEach((chest) => {
                if (crowbar instanceof Crowbar && chest instanceof Chest && crowbar.collideWithObject(chest) && !crowbar.getStatusCarried()) {
                    chest.unlockChest();
                    crowbar.setPosX(chest.getPosX() - 5000);
                    this.gameObjects.forEach((key) => {
                        if (key instanceof Key) {
                            key.setPosX(1290);
                        }
                    });
                }
            });
        });
        this.gameObjects.forEach((key) => {
            if (this.isUsing && this.player.collideWithObject(key) && key instanceof Key && !key.getIsSpecial()) {
                if (!this.hasKey) {
                    this.hasKey = true;
                    key.setStatusCarried(true);
                }
                else if (this.hasKey) {
                    this.hasKey = false;
                    key.setStatusCarried(false);
                }
            }
            if (this.dialogueKeyStarted && this.dialogueKey.getIsFinished() && key instanceof Key) {
                key.repairKey();
            }
        });
        this.gameObjects.forEach((object) => {
            if (object instanceof Key && this.player.collideWithObject(object) && object.getStatusCarried() && this.hasKey) {
                object.setPosX(this.player.getPosX() + this.player.getWidth() * 0.85);
                object.setPosY(this.player.getPosY() + this.player.getHeight() * 0.65);
            }
        });
        this.gameObjects.forEach((key) => {
            this.gameObjects.forEach((papy) => {
                if (key instanceof Key && papy instanceof Papy && key.collideWithObject(papy) && !key.getStatusCarried()) {
                    this.startDia2 = true;
                }
            });
        });
        this.gameObjects.forEach((key) => {
            this.gameObjects.forEach((donald) => {
                if (key instanceof Key && donald instanceof Donald && key.collideWithObject(donald) && key.getStatusCarried() && key.getIsRepaired()) {
                    this.isUsing = false;
                    key.setPosX(5000);
                    this.isCorrect = true;
                    donald.setDonaldGone();
                }
            });
        });
        this.isUsing = false;
        if (this.player.getPosX() > 1850) {
            this.music.stopSound();
            return new SceneEnd(this.maxX, this.maxY);
        }
        return null;
    }
    render(canvas) {
        CanvasUtil.clearCanvas(canvas);
        CanvasUtil.drawImage(canvas, this.background, 0, 0);
        this.gameObjects.forEach((object) => object.render(canvas));
        this.player.render(canvas);
        if (this.isTalking && !this.dialogueCrowbarStarted) {
            this.dialogueCrowbar = new DialogueLevelTwo(500, 440, 'Crowbar');
            this.dialogueCrowbarStarted = true;
        }
        if (this.dialogueCrowbarStarted) {
            this.dialogueCrowbar.render(canvas);
        }
        if (this.isTalking && !this.dialogueKeyStarted && this.dialogueCrowbar.getIsFinished() && this.startDia2) {
            this.dialogueKey = new DialogueLevelTwo(500, 440, 'Key');
            this.dialogueKeyStarted = true;
        }
        if (this.dialogueKeyStarted) {
            this.dialogueKey.render(canvas);
        }
        this.gameObjects.forEach((object) => {
            if ((object instanceof GameObject) && this.player.collideWithObject(object) && this.player.collideWithObject(object) && this.player.getPosY() + this.player.getHeight() < object.getPosY() + object.getHeight()) {
                object.render(canvas);
            }
            else if (object instanceof Crowbar && this.hasCrowbar) {
                this.player.render(canvas);
                object.render(canvas);
            }
        });
        this.tutorial.render(canvas);
    }
}
//# sourceMappingURL=LevelTwo.js.map
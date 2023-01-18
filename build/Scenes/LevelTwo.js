import Scene from './Scene.js';
import Player from '../Player.js';
import Crowbar from '../GameObjects/LevelTwo/Crowbar.js';
import CanvasUtil from '../CanvasUtil.js';
import KeyListener from '../KeyListener.js';
import Papy from '../GameObjects/LevelTwo/Papy.js';
import Key from '../GameObjects/LevelTwo/Key.js';
import KeyBroken from '../GameObjects/LevelTwo/KeyBroken.js';
import Donald from '../GameObjects/LevelTwo/Donald.js';
import MusicPlayer from '../MusicPlayer.js';
import Chest from '../GameObjects/LevelTwo/Chest.js';
export default class LevelTwo extends Scene {
    player;
    gameObjects = [];
    music;
    soundEffect;
    isCorrect;
    isUsing;
    hasCrowbar;
    isTalking;
    numOfSetPlates;
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
        this.gameObjects.push(new Papy(780, 230));
        this.gameObjects.push(new Key(300, 500));
        this.gameObjects.push(new KeyBroken(350, 500));
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
        this.isCorrect = false;
        this.music.playSound('levelTwoMusic');
    }
    processInput(keyListener) {
        const playerPosY = this.player.getPosY() + this.player.getHeight();
        const playerPosX = this.player.getPosX();
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
        if (keyListener.keyPressed(KeyListener.KEY_E))
            this.isUsing = true;
        if (keyListener.keyPressed(KeyListener.KEY_O))
            this.isCorrect = true;
    }
    update(elapsed) {
        console.log(this.maxX);
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
        });
        this.gameObjects.forEach((object) => {
            if (object instanceof Crowbar && this.player.collideWithObject(object) && object.getStatusCarried() && this.hasCrowbar) {
                object.setPosX(this.player.getPosX() + this.player.getWidth() * 0.65);
                object.setPosY(this.player.getPosY() + this.player.getHeight() * 0.45);
            }
            if (object instanceof Papy && this.player.collideWithObject(object) && this.isUsing) {
                this.isTalking = true;
            }
        });
        this.gameObjects.forEach((crowbar) => {
            this.gameObjects.forEach((chest) => {
                if (crowbar instanceof Crowbar && chest instanceof Chest && crowbar.collideWithObject(chest) && !crowbar.getStatusCarried()) {
                    chest.setIsSet(true);
                    crowbar.setIsSpecial(true);
                    crowbar.setPosX(chest.getPosX() - 5000);
                }
            });
        });
        this.numOfSetPlates = 0;
        return null;
    }
    render(canvas) {
        CanvasUtil.clearCanvas(canvas);
        CanvasUtil.drawImage(canvas, this.background, 0, 0);
        this.player.render(canvas);
        this.gameObjects.forEach((object) => object.render(canvas));
    }
}
//# sourceMappingURL=LevelTwo.js.map
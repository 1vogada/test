import Tutorial from '../GameObjects/Tutorial.js';
import MusicPlayer from '../MusicPlayer.js';
import SoundEffectPlayer from '../SoundEffectPlayer.js';
import Scene from './Scene.js';
export default class Level extends Scene {
    player;
    gameObjects = [];
    tutorial;
    isUsing;
    isTalking;
    isCorrect;
    music;
    musicStartGate;
    winSoundGate;
    soundEffect;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.soundEffect = new SoundEffectPlayer();
        this.music = new MusicPlayer();
        this.isTalking = false;
        this.isUsing = false;
        this.isCorrect = false;
        this.tutorial = new Tutorial();
        this.musicStartGate = true;
        this.winSoundGate = true;
    }
}
//# sourceMappingURL=Level.js.map
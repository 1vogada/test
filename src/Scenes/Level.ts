import GameObject from '../GameObjects/GameObject.js';
import Tutorial from '../GameObjects/Tutorial.js';
import MusicPlayer from '../MusicPlayer.js';
import Player from '../Player.js';
import SoundEffectPlayer from '../SoundEffectPlayer.js';
import Scene from './Scene.js';

export default abstract class Level extends Scene {
  protected player: Player;

  protected gameObjects: GameObject[] = [];

  protected tutorial: Tutorial;

  protected isUsing: boolean;

  protected isTalking: boolean;

  protected isCorrect: boolean;

  // Sound gates
  protected music: MusicPlayer;

  protected musicStartGate: boolean;

  protected winSoundGate: boolean;

  protected soundEffect: SoundEffectPlayer;

  public constructor(maxX: number, maxY: number) {
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

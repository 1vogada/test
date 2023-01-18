export default class MusicPlayer {
  private trackName: string;

  private audio: HTMLAudioElement;

  public constructor() {
    this.trackName = '';
    this.audio = new Audio('./assets/Sound/Music/blank.mp3');
  }

  /**
   *
   * @param track is the track to be played
   */
  // eslint-disable-next-line class-methods-use-this
  public playSound(track: string) : void {
    switch (track) {
      case 'mainMenu':
        this.audio = new Audio('./assets/Sound/Music/mainMenu.mp3');
        this.audio.volume = 0.2;
        break;
      case 'levelOneMusic':
        this.audio = new Audio('./assets/Sound/Music/levelOneMusic.mp3');
        this.audio.volume = 0.2;
        break;
      case 'levelTwoMusic':
        this.audio = new Audio('./assets/Sound/Music/levelTwoMusic.mp3');
        this.audio.volume = 0.3;
        break;
      default:
        break;
    }
    this.audio.play();
  }

  /**
   *
   */
  public stopSound() : void {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  /**
   *
   * @param volValue
   */
  public setVolume(volValue : number) : void {
    this.audio.volume = volValue;
  }

  /**
   *
   */
  public pauseSound() : void {
    this.audio.pause();
  }
}

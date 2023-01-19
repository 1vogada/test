export default class MusicPlayer {
    trackName;
    audio;
    constructor() {
        this.trackName = '';
        this.audio = new Audio('./assets/Sound/Music/blank.mp3');
    }
    playSound(track) {
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
    stopSound() {
        this.audio.pause();
        this.audio.currentTime = 0;
    }
    setVolume(volValue) {
        this.audio.volume = volValue;
    }
    pauseSound() {
        this.audio.pause();
    }
}
//# sourceMappingURL=MusicPlayer.js.map
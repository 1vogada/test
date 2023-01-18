export default class MusicPlayer {
    trackName;
    audio;
    constructor() {
        this.trackName = '';
        this.audio = new Audio('../assets/Sound/Music/blank.mp3');
    }
    playSound(track) {
        switch (track) {
            case 'mainMenu':
                this.audio = new Audio('../assets/Sound/Music/mainMenu.mp3');
                break;
            case 'levelOneMusic':
                this.audio = new Audio('../assets/Sound/Music/levelOneMusic.mp3');
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
}
//# sourceMappingURL=Music.js.map
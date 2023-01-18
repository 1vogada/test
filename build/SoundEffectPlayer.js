export default class SoundEffectPlayer {
    soundName;
    constructor() {
        this.soundName = '';
    }
    playSound(sound) {
        let audio = new Audio('./assets/Sound/SoundEffects/blank.mp3');
        switch (sound) {
            case 'itemPickUp':
                audio = new Audio('./assets/Sound/SoundEffects/itemPickUp.mp3');
                break;
            case 'plateActive':
                audio = new Audio('./assets/Sound/SoundEffects/plateActive.mp3');
                break;
            case 'sansDia':
                audio = new Audio('./assets/Sound/SoundEffects/sansDia.mp3');
                break;
            case 'waterMoving':
                audio = new Audio('./assets/Sound/SoundEffects/waterMoving.mp3');
                break;
            case 'win':
                audio = new Audio('./assets/Sound/SoundEffects/win.mp3');
                break;
            case 'rockPickUp':
                audio = new Audio('./assets/Sound/SoundEffects/rockPickUp.mp3');
                break;
            default:
                break;
        }
        audio.play();
    }
}
//# sourceMappingURL=SoundEffectPlayer.js.map
import CanvasUtil from '../CanvasUtil.js';
import Drawable from '../Drawable.js';

export default class Tutorial extends Drawable {
  public constructor(type: string) {
    super();
    if (type === 'tutorial') {
      this.image = CanvasUtil.loadNewImage('./assets/tutorial.png');
      this.posX = 670;
      this.posY = 320;
    } else if (type === 'prompt') {
      this.image = CanvasUtil.loadNewImage('./assets/tutorialPrompt.png');
      this.posX = 40;
      this.posY = 40;
    }
  }
}

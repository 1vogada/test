// import CanvasUtil from '../CanvasUtil.js';
// import GameObject from './GameObject.js';

// export default class Helper extends GameObject {
//   private idleFrame: HTMLImageElement;

//   private moveFrame: HTMLImageElement;

//   private frame: number;

//   // 0 for idle, 1 for move
//   private imageState: number;

//   public constructor(maxX: number, maxY: number) {
//     super();
//     this.posX = maxX / 2;
//     this.posY = maxY / 2;
//     this.moveFrame = CanvasUtil.loadNewImage('');
//     this.idleFrame = CanvasUtil.loadNewImage('');
//     this.image = this.idleFrame;
//     this.imageState = 0;
//   }

//   /**
//    *  Replaces the value of this.image to the next animation frame
//    *
//    * @param elapsed time for a frame
//    */
//   public override update(elapsed: number): void {
//     if (this.frame >= 700) {
//       if (this.imageState === 0) {
//         this.image = this.moveFrame;
//         this.imageState = 1;
//       } else {
//         this.image = this.idleFrame;
//         this.imageState = 0;
//       }
//       this.frame = 0;
//     } else {
//       this.frame += elapsed;
//     }
//   }
// }

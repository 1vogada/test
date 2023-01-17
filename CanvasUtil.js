export default class CanvasUtil {
    static getCanvasContext(canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx === null)
            throw new Error('Canvas Rendering Context is null');
        return ctx;
    }
    static fillCanvas(canvas, colour = '#FF10F0') {
        const ctx = CanvasUtil.getCanvasContext(canvas);
        ctx.beginPath();
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = colour;
        ctx.fill();
    }
    static loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
    static drawImage(canvas, image, dx, dy) {
        const ctx = CanvasUtil.getCanvasContext(canvas);
        ctx.drawImage(image, dx, dy);
    }
    static clearCanvas(canvas) {
        const ctx = CanvasUtil.getCanvasContext(canvas);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    static writeTextToCanvas(canvas, text, xCoordinate, yCoordinate, alignment = 'center', fontFamily = 'sans-serif', fontSize = 20, color = 'red') {
        CanvasUtil.writeText(canvas, text, xCoordinate, yCoordinate, alignment, fontFamily, fontSize, color);
    }
    static writeText(canvas, text, xCoordinate, yCoordinate, alignment = 'center', fontFamily = 'sans-serif', fontSize = 20, color = 'red') {
        const ctx = CanvasUtil.getCanvasContext(canvas);
        ctx.font = `${fontSize}px ${fontFamily}`;
        ctx.fillStyle = color;
        ctx.textAlign = alignment;
        ctx.fillText(text, xCoordinate, yCoordinate);
    }
    static drawCircle(canvas, centerX, centerY, radius, color = 'red') {
        const ctx = CanvasUtil.getCanvasContext(canvas);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
    static drawRectangle(canvas, dx, dy, width, height, color = 'red') {
        const ctx = CanvasUtil.getCanvasContext(canvas);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.rect(dx, dy, width, height);
        ctx.stroke();
    }
    static fillCircle(canvas, centerX, centerY, radius, color = 'red') {
        const ctx = CanvasUtil.getCanvasContext(canvas);
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.fill();
    }
    static fillRectangle(canvas, dx, dy, width, height, color = 'red') {
        const ctx = CanvasUtil.getCanvasContext(canvas);
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.rect(dx, dy, width, height);
        ctx.fill();
    }
}
//# sourceMappingURL=CanvasUtil.js.map
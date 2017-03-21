export interface I2dRenderingContext {
    fillStyle: string;
    font: string;
    lineWidth: number;
    strokeStyle: string;
    textAlign: string;
    textBaseline: string;
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number): void;
    beginPath(): void;
    fill(): void;
    fillText(text: string, x: number, y: number): void;
    lineTo(x: number, y: number): void;
    moveTo(x: number, y: number): void;
    rect(x: number, y: number, width: number, height: number): void;
    stroke(): void;
    strokeText(text: string, x: number, y: number): void;
}

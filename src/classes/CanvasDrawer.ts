import {I2dRenderingContext} from '../interfaces/I2dRenderingContext.interface';
import {IColour} from '../interfaces/IColour.interface';
import {ICoordinate} from '../interfaces/ICoordinate.interface';
import {IDrawer} from '../interfaces/IDrawer.interface';
import {Angle} from './Angle';
import {Colour} from './Colour';

export class CanvasDrawer implements IDrawer {
    private _context: I2dRenderingContext;

    constructor(canvasContext: I2dRenderingContext) {
        this._context = canvasContext;
    }

    public circle(position: ICoordinate, colour: IColour, radius: number, strokeWidth: number, strokeStyle: IColour): void {
        let context: I2dRenderingContext = this._context;

        context.beginPath();
        context.arc(position.x, position.y, radius, 0, Angle.fromDegrees(360).radians);
        context.fillStyle = colour.hex;
        context.fill();
        context.lineWidth = strokeWidth;
        context.strokeStyle = strokeStyle.hex;
        context.stroke();
    }

    public rectangle(topLeft: ICoordinate, bottomRight: ICoordinate, colour: IColour, strokeWidth: number, strokeStyle: IColour): void {
        let context: I2dRenderingContext = this._context;

        context.rect(topLeft.x, topLeft.y, bottomRight.x - topLeft.x, bottomRight.y - topLeft.y);
        context.fillStyle = colour.hex;
        context.fill();
        context.lineWidth = strokeWidth;
        context.strokeStyle = strokeStyle.hex;
        context.stroke();
    }

    public line(start: ICoordinate, end: ICoordinate, colour: IColour, strokeWidth: number): void {
        let context: I2dRenderingContext = this._context;

        context.beginPath();
        context.lineWidth = strokeWidth;
        context.strokeStyle = colour.hex;
        context.moveTo(start.x, start.y);
        context.lineTo(end.x, end.y);
        context.stroke();
    }

    public text(position: ICoordinate, colour: IColour, text: string, align: string, font: string, baseline: string): void {
        let context: I2dRenderingContext = this._context;

        context.font = font;
        context.fillStyle = colour.hex;
        context.strokeStyle = Colour.invert(colour).hex;
        context.lineWidth = 1;
        context.textAlign = align;
        context.textBaseline = baseline;
        context.strokeText(text, position.x, position.y);
        context.fillText(text, position.x, position.y);
    }
}

import { I2dRenderingContext } from '../interfaces/I2dRenderingContext.interface';
import { IColour } from '../interfaces/IColour.interface';
import { ICoordinate } from '../interfaces/ICoordinate.interface';
import { IDrawer } from '../interfaces/IDrawer.interface';
export declare class CanvasDrawer implements IDrawer {
    private _context;
    constructor(canvasContext: I2dRenderingContext);
    circle(position: ICoordinate, colour: IColour, radius: number, strokeWidth: number, strokeStyle: IColour): void;
    rectangle(topLeft: ICoordinate, bottomRight: ICoordinate, colour: IColour, strokeWidth: number, strokeStyle: IColour): void;
    line(start: ICoordinate, end: ICoordinate, colour: IColour, strokeWidth: number): void;
    text(position: ICoordinate, colour: IColour, text: string, align: string, font: string, baseline: string): void;
}

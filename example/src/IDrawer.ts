import { IColour } from './IColour';
import { IPosition } from './IPosition';

export interface IDrawer {
    circle(position: IPosition, colour: IColour, radius: number, strokeWidth: number, strokeStyle: IColour): void;
    line(start: IPosition, end: IPosition, colour: IColour, strokeWidth: number): void;
    rectangle(topLeft: IPosition, bottomRight: IPosition, colour: IColour, strokeWidth: number, strokeStyle: IColour): void;
    text(position: IPosition, colour: IColour, text: string, align: string, font: string, baseline: string): void;
}

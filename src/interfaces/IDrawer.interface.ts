import {IColour} from './IColour.interface';
import {ICoordinate} from './ICoordinate.interface';

export interface IDrawer {
    circle(position: ICoordinate, colour: IColour, radius: number, strokeWidth: number, strokeStyle: IColour): void;
    line(start: ICoordinate, end: ICoordinate, colour: IColour, strokeWidth: number): void;
    text(position: ICoordinate, colour: IColour, text: string, align: string, font: string, baseline: string): void;
}

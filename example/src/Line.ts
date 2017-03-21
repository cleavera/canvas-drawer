import {IColour} from "./IColour";
import {IDrawer} from "./IDrawer";
import {IPosition} from './IPosition';
import {Colour} from '../../dist/index';

export class Line {
    start: IPosition;
    end: IPosition;
    colour: IColour;
    width: number;

    constructor(start: IPosition, end: IPosition, width: number, colour: string) {
        this.start = start;
        this.end = end;
        this.colour = Colour.fromHex(colour);
        this.width = width;
    }

    draw(normaliser: (coordinate: IPosition) => IPosition, drawer: IDrawer) {
        drawer.line(normaliser(this.start), normaliser(this.end), this.colour, this.width);
    }
}